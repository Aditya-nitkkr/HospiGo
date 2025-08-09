const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      username: user.username,
      role: user.role,
    },
    secretKey,
    {
      expiresIn: "1d",
    }
  );
};

const requireAuth = (req, res, next) => {
  const token = req.cookies.LoggedInToken;
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });
  try {
    const decodedUser = jwt.verify(token, secretKey);
    console.log(decodedUser);
    req.user = decodedUser;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

const isAdmin = (req, res, next) => {
  const token = req.cookies.LoggedInToken;
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });
  try {
    const decodedUser = jwt.verify(token, secretKey);
    if (decodedUser.role === "admin") {
      req.user = decodedUser;
      next();
    } else {
      return res.status(403).json({ message: "Access denied. Not an admin." });
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = { requireAuth, generateToken, isAdmin };
