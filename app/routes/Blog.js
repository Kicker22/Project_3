const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');


// get a list of blog articles from the db
router.get('/blogs', function(req, res, next){
    Blog.find({}).then(function(blogs){
        res.send(blogs);
    })
});

// add a blog article to the db
router.post('/blogs', function(req, res, next){
    Blog.create(req.body).then(function(blog){
        res.redirect(301, 'https://mommie-blog-test.herokuapp.com')
    }).catch(next);
});

// update a blog article in the db
router.put('/blogs/:id', function(req, res, next){
    Blog.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Blog.findOne({_id: req.params.id}).then(function(blog){
            res.send(blog);
        }) 
    })
});

// delete a blog article from the db
router.delete('/blogs/:id', function(req, res, next){
    Blog.findByIdAndRemove({_id: req.params.id}).then(function(blog){
        res.send(blog);
    })
});


module.exports = router;