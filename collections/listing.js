const Listing = require("../models/listing");
module.exports.index = async (req, res) => {
  const data = await Listing.find();
  res.render("listings/index.ejs", { data });
};
module.exports.renderFormForNewListing = (req, res) => {
  res.render("listings/newlisting");
};
module.exports.addNewListing = async (req, res) => {
  let url = req.file.path;
  let filename = req.file.filename;
  const interData = new Listing(req.body.listing);
  interData.owner = req.user._id;
  interData.image = { url, filename };
  console.log(interData);

  await interData.save();
  req.flash("success", "Listing Posted Successfully!");
  res.redirect("/listings");
};
module.exports.postEditedListing = async (req, res) => {
  const data = req.body.listing;
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, data);
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let file = req.file.filename;
    listing.image = { url, file };
  }
  await listing.save();
  req.flash("success", "Successfully Edited! ");
  res.redirect("/listings");
};
module.exports.viewListing = async (req, res) => {
  const { id } = req.params;
  let data = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  res.render("listings/view.ejs", { data });
};
module.exports.formForEditListing = async (req, res) => {
  const { id } = req.params;
  const data = await Listing.findById({ _id: id });
  res.render("listings/editlisting", { data });
};
module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Successfully!");
  res.redirect("/listings");
};
