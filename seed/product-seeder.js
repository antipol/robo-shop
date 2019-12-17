// External deps
const mongoose = require("mongoose");
const faker = require("faker");

// Configs
const { env, db } = require("../config/environment");

// Models
const Product = require("../models/product");

async function seed() {
  // Don't do anything if not in dev environment
  if (env !== "development") return;

  // DB Connection
  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on("error", console.error);

  // Generate Random Products
  try {
    // delete existing entries
    await Product.deleteMany({});
    console.log("Product collections purged!");
  } catch (e) {
    // log errors
    console.error(e);
    return;
  }

  // create an array of promises for each product being created
  // the array will have anything between 4 - 50 entries
  const productPromises = Array(faker.random.number({ min: 5, max: 50 }))
    // fill the array with nulls so we can map it
    .fill(null)
    .map(() => {
      // randomize a product name
      const randomName = faker.commerce.productName();
      // create a mongoose Product
      const product = new Product({
        // generate url for robohash, a quick image
        imgUrl: `http://robohash.org/${randomName}`,
        title: randomName,
        // create a description with a random length of words between 5 and 30
        description: faker.lorem.words(
          faker.random.number({ min: 5, max: 30 })
        ),
        // generate a fake price
        price: faker.commerce.price()
      });
      // map each null in the array into a random saved product
      return product.save();
    });

  try {
    // resolve all product promises to save to db
    await Promise.all(productPromises);
    // disconnect DB
    mongoose.disconnect();
    console.log("Product collections seeded");
  } catch (e) {
    // log errors
    console.error(e);
  }
}

seed();
