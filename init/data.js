const sampledata = [
  {
    title: "Nature View",
    description:
      "A beautiful natural landscape with a clear sky and mountains in the distance.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null,
    location: "Mountainous Area",
    country: "USA",
  },
  {
    title: "Beach Sunset",
    description:
      "A stunning sunset over a beach with orange hues filling the sky.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null,
    location: "Tropical Beach",
    country: "Mexico",
  },
  {
    title: "Urban Architecture",
    description:
      "A modern building with large glass windows reflecting the blue sky.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: null,
    location: "City Center",
    country: "USA",
  },
  {
    title: "Luxury House",
    description:
      "A luxurious home surrounded by lush greenery, featuring a spacious garden.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 500000,
    location: "Suburban Area",
    country: "Canada",
  },
  {
    title: "Countryside Cottage",
    description:
      "A quaint cottage located in the peaceful countryside with beautiful nature surrounding it.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    price: 250000,
    location: "Countryside",
    country: "England",
  },
  {
    title: "Modern Home",
    description:
      "A sleek, modern house with minimalist design and a large backyard.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 750000,
    location: "Suburban Area",
    country: "USA",
  },
  {
    title: "Cityscape View",
    description:
      "A bustling city skyline with tall buildings and busy streets.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null,
    location: "City Center",
    country: "Germany",
  },
  {
    title: "Coastal Retreat",
    description:
      "A relaxing coastal retreat with a view of the ocean and palm trees.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/1587947/pexels-photo-1587947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 300000,
    location: "Coastal Area",
    country: "Australia",
  },
  {
    title: "Green Forest Path",
    description:
      "A serene path through a lush green forest with sunlight streaming through the trees.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/6422929/pexels-photo-6422929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null,
    location: "Forest",
    country: "Canada",
  },
  {
    title: "Sunny Garden",
    description: "A beautiful garden with colorful flowers under a bright sun.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/4981720/pexels-photo-4981720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null,
    location: "Residential Area",
    country: "USA",
  },
  {
    title: "Cozy Cottage in Snow",
    description:
      "A cozy cottage surrounded by snow, creating a peaceful winter atmosphere.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/12364203/pexels-photo-12364203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 150000,
    location: "Mountain Region",
    country: "Switzerland",
  },
  {
    title: "Modern Villa",
    description:
      "A luxurious modern villa with a spacious open plan and scenic views.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    price: 1000000,
    location: "Beachfront",
    country: "Spain",
  },
  {
    title: "Vibrant City Nightlife",
    description:
      "A vibrant city scene at night with illuminated buildings and busy streets.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/7578847/pexels-photo-7578847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null, // N/A replaced with null
    location: "City Center",
    country: "Italy",
  },
  {
    title: "Tropical Beach",
    description:
      "A tranquil tropical beach with turquoise waters and clear skies.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null, // N/A replaced with null
    location: "Tropical Island",
    country: "Thailand",
  },
  {
    title: "Glamorous Poolside",
    description:
      "A glamorous poolside setup with palm trees and a view of the horizon.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/4933643/pexels-photo-4933643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 500000, // Price converted to number
    location: "Luxury Resort",
    country: "Bali",
  },
  {
    title: "Mountain Landscape",
    description:
      "A scenic view of a mountain range with rolling hills and a cloudy sky.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/6422928/pexels-photo-6422928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null, // N/A replaced with null
    location: "Mountain Range",
    country: "USA",
  },
  {
    title: "Crisp Autumn Leaves",
    description:
      "A pathway covered in colorful autumn leaves with trees shedding their leaves.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/6422937/pexels-photo-6422937.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    price: null, // N/A replaced with null
    location: "Autumn Forest",
    country: "Canada",
  },
  {
    title: "Snowy Pine Trees",
    description: "Pine trees covered in snow, creating a winter wonderland.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/13008560/pexels-photo-13008560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: null, // N/A replaced with null
    location: "Mountain Forest",
    country: "Norway",
  },
  {
    title: "Serene Coastal View",
    description: "A peaceful coastal view with calm waters and a clear sky.",
    image: {
      filename: "listingImage",
      url: "https://images.pexels.com/photos/10628470/pexels-photo-10628470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    price: 350000, // Price converted to number
    location: "Coastal Area",
    country: "New Zealand",
  },
  {
    title: "Luxury Urban Apartment",
    description:
      "A luxury urban apartment with stunning city views and a sleek design.",
    image: {
      filename: "listingImage",
      url: "https://149369349.v2.pressablecdn.com/wp-content/uploads/2012/09/mcmansion.jpg",
    },
    price: 1200000, // Price converted to number
    location: "City Center",
    country: "UK",
  },
];

module.exports = { data: sampledata };
