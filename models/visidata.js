const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VisiData = new Schema({
    name:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = VisiD = mongoose.model('visidatas', VisiData);