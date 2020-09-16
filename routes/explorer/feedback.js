const express = require('express')
const rtr = express.Router()

const Feedback = require('../../models/feedback')

rtr.route('/show')
  .get((req, res) => {
    Feedback.find({}, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        res.json(doc);
      }
    })
  })
  .post((req, res) => {
    var r = req.body
    const newFeedback = new Feedback({
      Name: r.name,
      Message: r.message,
      Star: Number(r.star)
    })
    newFeedback.save()
      .then(item => res.json(item))
  })

module.exports = rtr