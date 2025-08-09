const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const secretKey = process.env.SECRET_KEY;
const { generateToken } = require("../authentication/jwt-auth");
const { handleHashPassword, comparePassword } = require("./bcryptAuth");
const passport = require("passport");
const { FaS } = require("react-icons/fa6");
const path = require("path");
require("../authentication/google");

const handleUserSignup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already registered" });
    }

    //? check if the user is admin or not

    const hospitalPath = path.join(
      __dirname,
      "../hospital_data/rewari_hospitals_10.json"
    );

    // console.log(hospitalPath);
    const hospitalData = JSON.parse(fs.readFileSync(hospitalPath));
    const isHospital = hospitalData.some((h) => h.email === email);

    // console.log(isHospital);
    // console.log(hospitalData);

    const assignRole = isHospital ? "admin" : "patient";

    const hashedPassword = await handleHashPassword(password);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      role: assignRole,
    });

    const token = generateToken(newUser);
    // console.log(token);

    res
      .cookie("LoggedInToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      })
      .status(201)
      .json({
        message: "SignUp successfully",
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
          role: user.role,
        },
      });
  } catch (error) {
    // res.status(401).send("Invalid credentials");
    // console.log(error);
    next(error);
  }
};

const handleUserLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    //if username is not given
    if (!email) {
      return res.status(400).json({ message: "Email is Required" });
    }

    // if password is not given
    if (!password) {
      return res.status(400).json({ message: "Password is Required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not Registered" });
    }

    const isMatch = await comparePassword(password, user.password);

    //if password  is not matching
    if (!isMatch) {
      return res.status(401).json({ message: "INVALID CREDENTIAL" });
    }

    //generating token
    const token = generateToken(user);
    // console.log(token);

    res
      .cookie("LoggedInToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
      })
      .status(200)
      .json({
        message: "Login successful",
        user: {
          id: user._id,
          email: user.email,
          username: user.username,
          role: user.role,
        },
      });
  } catch (error) {
    // return res.status(500).json({ Error: error });
    next(error);
  }
};

const handleLogout = (req, res) => {
  res.clearCookie("LoggedInToken");
  return res.status(200).json({ message: "Logged out successfully" });
};

const handleGoogleAuth = (req, res) => {
  return res.status(200).json({
    message: "Verification via google",
    user: {
      googleId: req.user.googleId,
      username: req.user.username,
      email: req.user.email,
    },
  });
};

const handleAuth = (req, res) => {
  return res.status(200).json({
    user: req.user,
    message: "Authenticated",
  });
};

const handleGoogleSetCookie = (req, res) => {
  const token = generateToken(req.user);

  res.cookie("LoggedInToken", token, {
    httpOnly: true,
    secure: false,
    sameSite: "Lax",
  });

  res.redirect("http://localhost:5173/oauth-google");
};

module.exports = {
  handleUserSignup,
  handleUserLogin,
  handleLogout,
  handleGoogleAuth,
  handleAuth,
  handleGoogleSetCookie,
};
