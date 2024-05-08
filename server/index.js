const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnection = require("./config/dbConnection");

// dotenv config
dotenv.config();

const bookRoute = require("./routes/bookROutes");

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/books", bookRoute);

// port
const PORT = process.env.PORT || 5000;

// listen
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await dbConnection();
});
