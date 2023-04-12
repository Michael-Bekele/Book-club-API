require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const conn = mongoose.connection;
try {
  conn.on("open", () => {
    console.log("Connected");
  });
} catch (error) {
  console.log("Error: " + error);
}

const myrouter = require("./router/book");
app.use("/book", myrouter);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});
