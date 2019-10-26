const express = require('express');
const router = express.Router();
const Question = require('../models/questions');


// get a list of questions from the db
router.get('/questions', function(req, res, next){
    Question.find({}).then(function(questions){
        res.send(questions);
    })
});

// add a question to the db
router.post('/questions', function(req, res, next){
    Question.create(req.body).then(function(question){
        res.redirect('/question')
    }).catch(next);
});

// update a question in the db
router.put('/questions/:id', function(req, res, next){
    Question.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Question.findOne({_id: req.params.id}).then(function(question){
            res.send(question);
        }) 
    })
});

// delete a question from the db
router.delete('/question/:id', function(req, res, next){
    Question.findByIdAndRemove({_id: req.params.id}).then(function(question){
        res.send(question);
    })
});


module.exports = router;