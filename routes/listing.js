const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const multer = require("multer");
const { storage, cloudinary } = require("../cloudinary.js");
const upload = multer({ storage });

const {
  isLoggedIn,
  isOwner,
  validateListingSchema,
} = require("../middleware.js");
const {
  index,
  renderFormForNewListing,
  addNewListing,
  viewListing,
  formForEditListing,
  postEditedListing,
  deleteListing,
} = require("../collections/listing.js");

router.delete("/:id/delete", isLoggedIn, isOwner, wrapAsync(deleteListing));

router
  .route("/:id/edit")
  .get(isLoggedIn, isOwner, wrapAsync(formForEditListing))
  .patch(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListingSchema,
    wrapAsync(postEditedListing)
  );
router
  .route("/new")
  .get(isLoggedIn, renderFormForNewListing)
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListingSchema,
    wrapAsync(addNewListing)
  );
router.get("/:id/view", wrapAsync(viewListing));

router.get("/", wrapAsync(index));
module.exports = router;
