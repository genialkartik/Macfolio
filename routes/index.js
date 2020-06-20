var express = require('express');
var router = express.Router();
var si = require('systeminformation')
var cData = require('../api/clientinfo')

var cdata = new cData()

/* GET home page. */
router.route('/')
.get(function(req, res, next) {
  si.users()
    .then(userdata => {
      cdata.cDataContainer(userdata[0], (d)=>{
      })
    })
  si.battery()
    .then(batterydata=>{
      cdata.cDataContainer(batterydata, (retrieved_data)=>{
        res.render('index', {
          title: 'Macfolio',
          data: retrieved_data
        })
      })
    })
    .catch(error => console.log(error))
})

router.route('/explorer')
.get(function(req, res){
  console.log('put request')
  res.json({
    status: 200,
    success: 'successfull'
  })
})

module.exports = router;

