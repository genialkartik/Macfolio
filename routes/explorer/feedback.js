const express = require('express')
const rtr = express.Router()
const AWS = require('aws-sdk')
const Feedback = require('../../models/feedback')

AWS.config.update({
  accessKeyId: "",
  secretAccessKey: ""
});
var s3 = new AWS.S3();

rtr.route('/show')
  .get(async (req, res) => {
    Feedback.find({}, async (err, doc) => {
      res.json(err ? null : doc)
    })
  })
  .post(async (req, res) => {
    var r = req.body;
    try {
      var params = {
        Bucket: 'BUCKETNAME',
        Body: req.files.image.data,
        Key: 'foldername/' + req.files.image.name.replace(/\s/g, '')
      };
      s3.upload(params, async (err, data) => {
        if (err) {
          res.json(null)
        } else {
          const newFeedback = new Feedback({
            Name: r.name,
            Message: r.message,
            Star: Number(r.star),
            ImageName: data.Location
          })
          await newFeedback.save()
            .then(item => res.json(item))
        }
      })
    } catch (error) {
      console.log(error)
      res.json(null)
    }
  })

module.exports = rtr