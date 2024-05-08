const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN);
    console.log("db connection successfull");
  } catch (error) {
    console.log("db connection error");
  }
};

module.exports = dbConnection;
