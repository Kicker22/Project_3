// const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

// storing express in app var
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// connection port
const port = process.env.PORT || 5000;

// DB Config
var db = process.env.MONGODB_URI || "mongodb://localhost/PROJECT-3";


// serving static test files
app.use(express.static(__dirname + './app/google'));
require('./app/routes/htmlRoute')(app)
// end of test files



// mongooseDB connections
mongoose
.connect(db)
.then(() => console.log('Connected to mongoDb...'))
.catch(err => console.log(err));

app.listen(port, () => console.log(`server started on http://locahost: ${port}`))


