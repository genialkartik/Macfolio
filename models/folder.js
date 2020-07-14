const { Mongoose } = require("mongoose")

const mongoose = require(mongoose)
const Schema = mongoose.Schema

const FolderSchema = new Schema({
    f_name: {
        type: String,
        required: true
    },
    f_size: {
        type: Number,
        required: true
    },
    f_location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Folder = mongoose.model('folder', FolderSchema )