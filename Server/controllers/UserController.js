import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// generate otp
const generateOtp = () => Math.floor(100000 + Math.random() * 900000);

// sign up
export async function createUser(req, res) {
  try {
    const newUserData = req.body;

    // check admin
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

    // Create otp mail
    const msg = {
      to: newUserData.email,
      from: process.env.SENDGRID_VERIFIED_EMAIL,
      templateId: "d-c769a40955df4231b1192183544b7b9f",
      dynamic_template_data: { otp: newUserData.otp },
    };

    console.log(process.env.SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_VERIFIED_EMAIL);

    await sgMail.send(msg);

    // Add user
    await newUser.save();
    res.status(201).json({ message: "New User Created" });
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
