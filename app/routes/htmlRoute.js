const path = require("path")
const express = require("express")
const Blog = require("./Blog")


module.exports = function (app) {  
    app.use(express.static("./google"));        
        
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

