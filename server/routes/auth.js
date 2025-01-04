import express from "express";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
const router = express.Router();
import User from "../modals/User.js";

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    isAdmin: req.body.isAdmin === "true" ? true : false, // Set isAdmin from request body
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username, 
    });

    // Check if user exists
    if (!user) {
      return res.status(401).json("Wrong User Name");
    }
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // Compare input password with the decrypted password
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong Password"); // Exit immediately after response
    }

    // Generate JWT token
    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    // Send user data and token (excluding password)
    const { password, ...others } = user._doc;
    return res.status(200).json({ ...others, accessToken }); // Use return to exit after sending the response

  } catch (err) {
    console.error("Error in login:", err); // Log the error for debugging
    return res.status(500).json(err); // Send a 500 error if something goes wrong
  }
});




export default router;
