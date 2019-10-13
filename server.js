// const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');

// storing express in app var
const app = express()

// connection port
const port = process.env.PORT || 5000;

// DB Config
var db = process.env.MONGODB_URI || "mongodb://localhost/PROJECT-3";

// mongooseDB connections
mongoose
.connect(db)
.then(() => console.log('Connected to mongoDb...'))
.catch(err => console.log(err));

app.listen(port, () => console.log(`server started on http://locahost: ${port}`))


