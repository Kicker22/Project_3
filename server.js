// const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');

// storing express in app var
const app = express()

// connection port
const port = process.env.PORT || 5000;

// mongooseDB connections
mongoose
.connect(db || "enter db URI here")
.then(() => console.log('Connected to mongoDb...'))
.catch(err => console.log(err));

app.listen(port, () => console.log(`server started on http://locahost: ${port}`))


