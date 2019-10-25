const path = require("path")
const express = require("express")
const Blog = require("./Blog")

// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH
// THESE ARE TEST ROUTES USED TO SET UP GOOGLE OAUTH



    // app.get("/login", function (req, res) {
    //     res.sendFile(path.join(__dirname, "googleTest"));   
    // });

           
    module.exports = function (app) {   

    // If no matching route is found default to home
    // app.get("/", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../google/googleTest.html"));
    // });
    // app.get("/test", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../google/testForm.html"));
    // });
    app.get("/create", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/articleBuilder.html"));
    });
    app.get("/question", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/questionBuilder.html"));
    });
    app.post("/create", function (req, res) {
        const newBlog = new Blog({
            image: req.body.image,
            author: req.body.author,
            summary:req.body.summary,
            body: req.body.body,
            comments: req.body.comments,
            username: req.body.username
        })

        console.log(newBlog)

        newBlog.save().then(blog => res.json(blog))
        res.sendFile(path.join(__dirname, "../public/articleBuilder.html"));
      
    });

    app.post("/question", function (req, res) {
        const newQuestion = new Question({
            question: req.body.question,
        })

        console.log(newQuestion)

        newQuestion.save().then(question => res.json(question))
        res.sendFile(path.join(__dirname, "../public/questionBuilder.html"));
      
    });

    }