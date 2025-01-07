const Listing = require("./models/listing");
const Review = require("./models/reviews.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
module.exports.validateListingSchema = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    return next(
      new ExpressError(400, error.details.map((e) => e.message).join(","))
    );
  } else {
    next();
  }
};
module.exports.validateReviewSchema = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    throw new ExpressError(404, error.details.map((e) => e.message).join(","));
  } else {
    next();
  }
};
module.exports.isLoggedIn = (req, res, next) => {
  if (
    req.originalUrl.includes("/reviews") ||
    req.originalUrl.includes("/delete")
  ) {
    const listingId = req.originalUrl.split("/")[2];
    req.session.url = `/listings/${listingId}/view`;
  } else {
    req.session.url = req.originalUrl;
  }

  if (!req.isAuthenticated()) {
    req.flash("error", "You must be logged in first!");
    return res.redirect("/login");
  }
  return next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.url) {
    res.locals.finalUrl = req.session.url;
    delete req.session.url;
  }
  return next();
};

module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing.owner.equals(res.locals.currentUser._id)) {
    req.flash("error", "You aren't the Host of this listing..");
    return res.redirect(`/listings/${id}/view`);
  }
  next();
};
module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, reviewsId } = req.params;
  let review = await Review.findById(reviewsId);
  if (!review.author.equals(res.locals.currentUser._id)) {
    req.flash("error", "Your aren't the author of this review ;)");
    return res.redirect(`/listings/${id}/view`);
  }
  next();
};
