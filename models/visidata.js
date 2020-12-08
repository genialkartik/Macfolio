const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VisiData = new Schema({
    System: {
        type: Object,
        required: false
    },
    User: {
        type: Object,
        required: false
    },
    VisitorName: {
        type: Object,
        index:true, 
        unique:true,
        sparse:true
    },
    osInfo: {
        type: Object,
        required: false
    }
})

module.exports = VisiD = mongoose.model('visidatas', VisiData);