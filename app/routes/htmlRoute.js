const path = require("path")
const express = require("express")

// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH


module.exports = function (app) {
    // app.get("/login", function (req, res) {
    //     res.sendFile(path.join(__dirname, "googleTest"));   
    // });

    app.use(express.static("./google"));        
        

    // If no matching route is found default to home
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../google/googleTest.html"));
    });

}
