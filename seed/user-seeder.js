const mongoose = require("mongoose");

const { env, db } = require("../config/environment");

const User = require("../models/user");

// Seeding function
async function seed() {
  // don't run this if it is not in the dev environment
  if (env !== "development") return;

  const testUser = {
    email: "a@a.a",
    password: "1234567890"
  };

  // create a DB connection
  mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });

  // log db errors
  try {
    // first try to delete an existing user
    await User.deleteOne({ email: testUser.email });
    console.log("Test user deleted");
  } catch (e) {
    console.error(e);
  }
  try {
    // create test user
    const user = new User(testUser);
    // Save new user
    await user.save();
    console.log("Test user created");

    // disconnect from db
    mongoose.disconnect();
  } catch (e) {
    console.error(e);
  }
}

seed();
