const passport = require("passport");
require("dotenv").config();

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      // console.log(profile);
      const email = profile.emails?.[0]?.value;
      const username = profile.displayName;
      const role = "patient";
      const user = {
        googleId: profile.id,
        username,
        email,
        role,
      };

      done(null, user);
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});
