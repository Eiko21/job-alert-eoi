const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: [true, 'username already exist']
    },
	name: {
        type: String
    },
	email: {
        type: String,
        required: [true, 'email is required'],
    }
});

const USERS = mongoose.model('user', usersSchema);

module.exports = USERS;