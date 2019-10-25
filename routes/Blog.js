const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');


// get a list of users from the db
router.get('/blogs', function(req, res, next){
    Blog.find({}).then(function(blogs){
        res.send(blogs);
    })
});

// add a user to the db
router.post('/blogs', function(req, res, next){
    Blog.create(req.body).then(function(blog){
        res.send(blog);
    }).catch(next);
});

// update a user in the db
router.put('/blogs/:id', function(req, res, next){
    Blog.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Blog.findOne({_id: req.params.id}).then(function(blog){
            res.send(blog);
        }) 
    })
});

// delete a user from the db
router.delete('/blogs/:id', function(req, res, next){
    Blog.findByIdAndRemove({_id: req.params.id}).then(function(blog){
        res.send(blog);
    })
});


module.exports = router;