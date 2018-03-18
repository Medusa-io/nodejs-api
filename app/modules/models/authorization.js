const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorization = new Schema({
    status: {type: Boolean, required: true},
    avatar: {type: String, required: true},
    employee: {}
}, {
    timestamps: true
})

module.exports = mongoose.model('Authorization', authorization)
