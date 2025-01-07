const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  validateReviewSchema,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { postReview, deleteReview } = require("../collections/review.js");

router.delete(
  "/:reviewsId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(deleteReview)
);
router.post("/", isLoggedIn, validateReviewSchema, wrapAsync(postReview));

module.exports = router;
