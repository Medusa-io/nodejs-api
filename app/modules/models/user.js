const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: {unique: true}},
    avatar: {type: String, default: ''},
    gcm: {type: String, default: ''},
    token: {type: String, default: ''},
    password: {type: String, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('User', User)
