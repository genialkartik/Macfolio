const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

const app = express()

const visiapi = require('./routes/api/visiapi')
const explorers = require('./routes/explorer/explorer')

app.use(fileUpload())
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log('MongoDB Connected.')
    })
    .catch(err => console.log(err))

// Use Routes
app.use('/api/visidata', visiapi)
app.use('/explorer', explorers)

const port = process.env.Port || 2050
app.listen(port, ()=> console.log('Listening on Port: '+port))



