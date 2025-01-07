const mongoose = require("mongoose");
const sampledata = require("./data.js");

const Listing = require("../models/listing");
main()
  .then(() => {
    console.log("inserted smaple data  succesfully");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/traveldb");
  console.log("connected securely with db ");
  try {
    await Listing.deleteMany({});
    console.log("data delted startingly");
    let newData = sampledata.data.map((obj) => ({
      ...obj,
      owner: "67777a58c9e7074e87501a7f",
    }));
    let dat = await Listing.insertMany(newData);
    console.log(dat);
  } catch (err) {
    console.log(err);
  }
}
