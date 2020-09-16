const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FeedbackSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
    Star: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Feedback = mongoose.model('feedbacks', FeedbackSchema)
