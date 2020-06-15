var express = require('express');
var router = express.Router();
var si = require('systeminformation')
var cData = require('../api/clientinfo')

var cdata = new cData()

/* GET home page. */
router.get('/', function(req, res, next) {
  si.users()
    .then(data => {
      cdata.cDataContainer(data)
    })
    .catch(error => console.log(error))
  res.render('index', { title: 'Macfolio' });
});

module.exports = router;
