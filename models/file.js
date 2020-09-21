const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FileSchema = new Schema({
    fileName: {
        type: String,
        required: true
    },
    itemType: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileStatus: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = File = mongoose.model('files', FileSchema)