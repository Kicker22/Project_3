const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema and model
const BlogSchema = new Schema({
    image: String,
    title: {
        type: String,
        required: true,
    },    
    author: {
        type: String,
        required: true,
    }, 
    body: {
        type: String,
        required: true,
    },
    comments: [{ body: String, date: Date.now }],
    date: { type: Date, default: Date.now },
    username: String
});

const Blog = mongoose.model('blogs', BlogSchema);

module.exports = Blog;