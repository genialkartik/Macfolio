const { Mongoose } = require("mongoose")

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FolderSchema = new Schema({
    folderName: {
        type: String,
        required: true
    },
    folderSize: {
        type: Number,
        required: false
    },
    folderPath: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Folder = mongoose.model('folders', FolderSchema )