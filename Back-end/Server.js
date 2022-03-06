const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-Parser");
require("dotenv").config();
const { readdirSync } = require("fs");
const app = express();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

readdirSync("./routes").map((r) => {
  app.use("/api", require("./routes/" + r));
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("server is running on port", port);
});
