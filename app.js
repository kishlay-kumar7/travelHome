const express = require("express");
const mongoose = require("mongoose");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
require("dotenv").config();

const passport = require("passport");
const User = require("./models/user.js");
const LocalStrategy = require("passport-local");

const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const listingRoutes = require("./routes/listing.js");
const reviewsRoutes = require("./routes/review.js");
const userRoutes = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/traveldb");
  console.log("Connected securely");
}

const sessionOptions = {
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET || "fallbackofKISHLAYbackend",
  resave: false,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // expires in 7 days
    maxAge: 7 * 24 * 60 * 60 * 1000, // max age of 7 days
    httpOnly: true,
    secure: false, // set to true for HTTPS, false for HTTP
  },
};
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewsRoutes);
app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Coming soon");
});

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.render("listings/error.ejs", { statusCode, message });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("App is listening");
});
