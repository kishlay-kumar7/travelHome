const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().allow(null).required(),
    image: Joi.any(),
    location: Joi.string().required(),
    country: Joi.string().required(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
});
