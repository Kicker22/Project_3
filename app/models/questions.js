const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Question schema and model
const QuestionSchema = new Schema({
    question: {
        type: String,
        required: true,
    },    
    answer: {
        type: String,
    }, 
    date: { 
        type: Date, default: Date.now 
    },
    username: String
});

const Question = mongoose.model('questions', QuestionSchema);

module.exports = Question;