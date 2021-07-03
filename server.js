const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const visiapi = require("./routes/api/visiapi");
const explorers = require("./routes/explorer/explorer");
const feedbacks = require("./routes/explorer/feedback");

const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(fileUpload());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected."))
  .catch((err) => console.log(err));

// Use Routes
app.use(require("./routes/explorer/contact"));
app.use("/visidata", visiapi);
app.use("/explorer", explorers);
app.use("/feedback", feedbacks);

if (typeof window !== "undefined") {
  window.React = React;
}

if (process.env.ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(morgan("tiny"));

app.listen(port, () => console.log("Listening on Port: " + port));
