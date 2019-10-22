// const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const users = require('./app/routes/User');
const blogs = require('./app/routes/Blog');
const questions = require("./app/routes/Question");
const bodyParser = require('body-parser');
const cors_proxy = require('cors-anywhere');

require('dotenv').config();

// storing express in app var
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// body-parser middleware
app.use(bodyParser.json())

// routes to users and blog posts
app.use(users);
app.use(blogs);
app.use(questions);

// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})

// connection port
const PORT = process.env.PORT || 5000;
// cors_proxy.createServer({
//     originWhitelist: [`origin: process.env.ORIGIN_URL || "http://localhost",
//     optionsSuccessStatus: 200`], // Allow all origins
//     requireHeader: ['origin', 'x-requested-with'],
//     removeHeaders: ['cookie', 'cookie2'],
//     AccessControlAllowOrigin: ['*']
// });
// .listen(PORT, 'http://localhost', function() {
//     console.log('Running CORS Anywhere on ' + 'http://localhost + ':' + port);
// });

// DB Config
const db = require('./keys').MongoURI;
// var db = process.env.MONGODB_URI || "mongodb://localhost/PROJECT-3";

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// serving static test files
// app.use(express.static(__dirname + './client/public'));
app.use(express.static(__dirname + '/app/public/'));
require('./app/routes/htmlRoute')(app)
// end of test files
// app.use("/cors/*", function(req, res) {
//     req.pipe(request(req.params[0])).pipe(res);
//   });

app.listen(PORT, () => console.log(`CORS-enabled web server started on http://locahost: ${PORT}`))



