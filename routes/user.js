const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");
const {
  logout,
  loginForm,
  postingSingup,
  signupForm,
  doLogin,
} = require("../collections/user");
router.route("/signup").get(signupForm).post(wrapAsync(postingSingup));
router
  .route("/login")
  .get(loginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    doLogin
  );
router.get("/logout", logout);
module.exports = router;
