const express = require('express')
const rtr = express.Router()
const nodemailer = require('nodemailer')


// POST contact form
rtr.post('/contact', function (req, res) {
    let msg = `Name: ` + req.body.cname + ` <br>Contact: ` + req.body.cemail + ` <br>Message: ` + req.body.csubject;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'YOUR_EMAIL', // without @gmail.com
            pass: 'YOUR_PSWD'
        }
    });
    var mailOptions = {
        from: req.body.cemail,
        to: 'YOUR_EMAIL@gmail.com',
        subject: req.body.csubject,
        text: msg
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.json({
                status: 300,
                send: false
            })
        } else {
            res.json({
                status: 200,
                send: true
            });

        }
    });
});

module.exports = rtr