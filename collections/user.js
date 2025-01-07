const User = require("../models/user");
module.exports.logout = (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "Logged you out!");
    res.redirect("/listings");
  });
};
module.exports.loginForm = (req, res) => {
  res.render("users/loginup");
};
module.exports.postingSingup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      req.flash("error", "Username already taken!");
      return res.redirect("/signup");
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      req.flash("error", "Email id is already registered!");
      return res.redirect("/signup");
    }
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Successfully Singed-In !");
      res.redirect("/listings");
    });
  } catch (e) {
    console.log(e);

    req.flash("error", e.message);
    res.redirect("/signup");
  }
};
module.exports.signupForm = (req, res) => {
  res.render("users/signup");
};
module.exports.doLogin = (req, res) => {
  req.flash("success", "Successfully Logged-In!");
  const redirectUrl = res.locals.finalUrl || "/listings";
  console.log("Final Redirect URL:", redirectUrl);
  res.redirect(redirectUrl);
};
