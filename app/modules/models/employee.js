const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema({
    name: {type: String, required: true},
    avatar: {type: String, default: ''},
    password: {type: String, required: true}
}, {
    timestamps: true
})

module.exports = mongoose.model('Employee', Employee)
