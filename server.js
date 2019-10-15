// const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const routes = require('./app/routes/User');
const bodyParser = require('body-parser');

// storing express in app var
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// body-parser middleware
app.use(bodyParser.json())

// routes to users
app.use(routes);

// error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
})

// connection port
const port = process.env.PORT || 5000;

// DB Config
const db = require('./keys').MongoURI;
// var db = process.env.MONGODB_URI || "mongodb://localhost/PROJECT-3";

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// serving static test files
app.use(express.static(__dirname + './app/google'));
require('./app/routes/htmlRoute')(app)
// end of test files


app.listen(port, () => console.log(`server started on http://locahost: ${port}`))


