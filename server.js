const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({});

const app = express();
app.use(cors());
app.options("*", cors());

app.use("/", express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App Running On Port ${PORT}`);
});
