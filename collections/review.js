const Review = require("../models/reviews");
const Listing = require("../models/listing");
module.exports.postReview = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    req.flash("error", "Listing ID not found");
    return res.redirect("/listings");
  }

  console.log("Request ID:", id);

  let { rating, comment } = req.body;
  console.log("Request Body:", req.body);

  let listing = await Listing.findById(id);
  if (!listing) {
    console.log("No listing found with the given ID");
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  let newReview = new Review({ rating, comment });
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();

  req.flash("success", "Review added successfully!");
  res.redirect(`/listings/${id}/view`);
};
module.exports.deleteReview = async (req, res) => {
  let { id, reviewsId } = req.params;
  console.log(id, reviewsId);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewsId } });
  await Review.findByIdAndDelete(reviewsId);
  req.flash("success", "Review Deleted! ");
  res.redirect(`/listings/${id}/view`);
};
