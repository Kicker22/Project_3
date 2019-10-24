const axios = require("axios");
const router = require("express").Router();
const meetups = require('../models/meetups');

router.get("/meetups", (req, res) => {
  axios.get("https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/topics?query=", 
    { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
