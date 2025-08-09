const passport = require("passport");
require("../authentication/google");

const initialGoogleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

const handleGoogleAuthCallback = passport.authenticate("google", {
  session: false,
  failureRedirect: "/auth/signup",
});

module.exports = {
  initialGoogleAuth,
  handleGoogleAuthCallback,
};
