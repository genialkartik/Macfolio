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
  .post(async (req, res) => {
    var r = req.body;
    req.files.image.mv('./client/build/feedback/' + req.files.image.name, async (err) => {
      // req.files.image.mv('./client/public/feedback/' + req.files.image.name, async (err) => {
      if (err) {
        console.log(err)
        res.json(null)
      }
      else {
        const newFeedback = new Feedback({
          Name: r.name,
          Message: r.message,
          Star: Number(r.star),
          ImageName: req.files.image.name
        })
        await newFeedback.save()
          .then(item => res.json(item))
      }
    })
  })

module.exports = rtr