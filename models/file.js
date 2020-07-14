const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FileSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    filetype: {
        type: String,
        required: true
    },
    filesize: {
        type: Number,
        required: true
    },
    filelocation: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})