const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const visiapi = require('./routes/api/visiapi')

const app = express()

app.use(bodyParser.json())

const db = require('./config/mongoconnect').mongoURI

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

const port = process.env.Port || 2050
app.listen(port, ()=> console.log('Listening on Port: '+port))
