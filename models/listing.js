const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./reviews");
const User = require("./user");
const listingSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    url: String,
    filename: String,
  },
  price: {
    type: Number,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});
const onrent = mongoose.model("onrent", listingSchema);
module.exports = onrent;
