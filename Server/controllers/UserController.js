import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  try {
    const { email, password, displayName } = req.body;

    // cheack allready sign up
    // const existingUser = await User.findone({ email });
    // console.log(existingUser);
    // if (existingUser) {
    //   return res.status(409).json({ message: "username is already exits!" });
    // }

    // password salt & hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      email,
      password: hashedPassword,
      displayName,
    });
    // Add user
    await newUser.save();
    res.status(201).json({ message: "New User Created" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
