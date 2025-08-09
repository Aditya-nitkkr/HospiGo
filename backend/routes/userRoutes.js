const express = require("express");
const {
  handleUserSignup,
  handleUserLogin,
  handleLogout,
  handleGoogleAuth,
  handleAuth,
  handleGoogleSetCookie,
} = require("../controllers/userAuthControllers");
const { signUpSchema, validate } = require("../middleWares/zod");
const { requireAuth } = require("../authentication/jwt-auth");
const {
  initialGoogleAuth,
  handleGoogleAuthCallback,
} = require("../middleWares/passportGoogleAuth");
const router = express.Router();

router.get("/google", initialGoogleAuth);
router.get("/google/callback", handleGoogleAuthCallback, handleGoogleSetCookie);
router.get("/status", requireAuth, handleGoogleAuth);
router.get("/checkAuthentication", requireAuth, handleAuth);


router.post("/signup", validate(signUpSchema), handleUserSignup);
router.post("/login", handleUserLogin);
router.post("/logout", handleLogout);

module.exports = router;
