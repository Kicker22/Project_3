// const axios = require('axios');
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const users = require("./app/routes/User");
const blogs = require("./app/routes/Blog");
const questions = require("./app/routes/Question");
const apiRoutes = require("./routes/apiRoutes");
const bodyParser = require("body-parser");
const cors = require('cors');

require("dotenv").config();

// storing express in app var
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// body-parser middleware
app.use(bodyParser.json());

// routes to users and blog posts
app.use(users);
app.use(blogs);
app.use(questions);
app.use("/api", apiRoutes);

// error handling middleware
app.use(function(err, req, res, next) {
  res.status(422).send({ error: err.message });
});

// connection port
const PORT = process.env.PORT || 5000;

var db = process.env.MONGODB_URI || "mongodb://localhost/PROJECT-3";

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.use(express.static("/app/public"));
}

app.use(express.static(__dirname + "/app/public/"));
require("./app/routes/htmlRoute")(app);


app.listen(PORT, () =>
  console.log(`server started on http://locahost: ${PORT}`)
);
