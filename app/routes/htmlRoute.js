const path = require("path")
const express = require("express")

const Blog = require("./Blog")

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
    app.get("/test", function (req, res) {
        res.sendFile(path.join(__dirname, "../google/testForm.html"));
      
    });
    app.post("/test", function (req, res) {
        const newBlog = new Blog({
            image: req.body.image,
            author: req.body.auth,
            body: req.body.body,
            comments: req.body.comments,
            username: req.body.username
        })

        console.log(newBlog)

        newBlog.save().then(blog => res.json(blog))
        res.sendFile(path.join(__dirname, "../google/testForm.html"));
      
    });

}
