import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";

// generate otp
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// sign up
export async function createUser(req, res) {
  try {
    const newUserData = req.body;

    // check admin for Register new admin
    if (newUserData.role == "admin") {
      if (!isAdmin(req)) {
        return res.status(403).json({ message: "Please Login as a Admin!" });
      }
    }

    // check already signed up
    const existingUser = await User.findOne({ email: newUserData.email });
    if (existingUser) {
      return res.status(409).json({ message: "username is already exists!" });
    }

    // password salt & hash
    const salt = await bcrypt.genSalt(10);
    newUserData.password = await bcrypt.hash(newUserData.password, salt);

    newUserData.otp = generateOtp();
    // Create new user
    const newUser = new User(newUserData);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Create otp mail
    const msg = {
      to: newUserData.email,
      from: process.env.SENDGRID_VERIFIED_EMAIL,
      templateId: "d-c769a40955df4231b1192183544b7b9f",
      dynamic_template_data: { otp: newUserData.otp },
    };

    //   Create jwt
    const token = jwt.sign(
      {
        email: newUserData.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "5m" }
    );

    await sgMail.send(msg);

    // Add user
    await newUser.save();
    res.status(201).json({ message: "New User Created", token: token });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

// login
export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Username is not Found" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password is Wrong" });
    }

    //   Create jwt
    const token = jwt.sign(
      {
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "90d" }
    );

    res.json({
      message: "User logged in",
      token: token,
      user: {
        displayName: user.displayName,
        role: user.role,
        email: user.email,
      },
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

// Verify OTP

export async function verifyOtp(req, res) {
  try {
    const { otp } = req.body;
    const email = req.user.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Username is not found!" });
    }

    // check otp and active account
    if (user.otp == otp) {
      await User.findOneAndUpdate({ email }, { isActive: true });
    } else {
      return res.status(401).json({ message: "OTP is incorrecct !" });
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // Create Welcome email
    const msg = {
      to: user.email,
      from: process.env.SENDGRID_VERIFIED_EMAIL,
      templateId: "d-fa410f184c094f1b8a5f55bb916436f4",
      dynamic_template_data: { name: user.displayName },
    };

    await sgMail.send(msg);

    res.status(201).json({ message: "New User verified" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

// Reset password - verify email
export async function verifyEmail(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({ message: "User not found !" });
    }

    // update new otp
    const newOtp = generateOtp();
    await User.findOneAndUpdate({ email }, { otp: newOtp });

    // sent new otp email
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: user.email,
      from: process.env.SENDGRID_VERIFIED_EMAIL,
      templateId: "d-4af68d4ecf67488bafff95da0bd22cc1",
      dynamic_template_data: { otp: user.otp },
    };

    await sgMail.send(msg);

    //   Create jwt for store user email
    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    res.status(201).json({ message: "OTP Changed!", token: token });
  } catch (error) {
    res.status(500).json({ error: e });
  }
}

// Reset Password - OTP verify

export async function resetPasswordVerifyOtp(req, res) {
  try {
    const { otp } = req.body;
    const email = req.user.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({ message: "User not found" });
    }
    if (user.otp != otp) {
      return res.status(409).json({ message: "OTP incorrect " });
    }

    const token = jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "10m" }
    );

    res.status(200).json({ message: "Email Varified ", token: token });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}

// Reset Password
export async function resetPassword(req, res) {
  try {
    const { password } = req.body;
    const email = req.user.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(409).json({ message: "User not found!" });
    }

    // password salt & hash
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    // update database
    await User.findOneAndUpdate({ email }, { password: newPassword });
    res.status(200).json({ message: "Password reset successfullly" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

// check user is admin
export function isAdmin(req) {
  if (!req.user) {
    return false;
  }
  if (req.user.role != "admin") {
    return false;
  }
  return true;
}

// user - dinukarandul@gmail.com - dinuka123
// admin - admin1@gmail.com - admin123
