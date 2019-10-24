const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Meetup schema and model
const MeetupSchema = new Schema({
    id: Number,
    name: {
        type: String,
        required: true,
    },    
    urlkey: {
        type: String,
        required: true,
    }, 
    group_count:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    lang: String,
});

const Meetups = mongoose.model('meetups', MeetupSchema);

module.exports = Meetups;