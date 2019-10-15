const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema and model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    username: {
        type: String,
        required: true,
        unique: true
    }  
});

const User = mongoose.model('users', UserSchema);

module.exports = User;