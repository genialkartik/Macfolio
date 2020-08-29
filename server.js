const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require('path')
const app = express()

const visiapi = require('./routes/api/visiapi')
const explorers = require('./routes/explorer/explorer')
const feedbacks = require('./routes/explorer/feedback')

app.use(fileUpload())
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB Connected.')
  })
  .catch(err => console.log(err))

// Use Routes
app.use(require('./routes/explorer/contact'))
app.use('/visidata', visiapi)
app.use('/explorer', explorers)
app.use('/feedback', feedbacks)


// Serve static assets if in production
app.use(express.static(path.join(__dirname, '../client/build')))
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const port = process.env.Port || 2050

app.listen(port, () => console.log('Listening on Port: ' + port))



