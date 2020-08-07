const express = require('express')
const router = express.Router()
const sysinfo = require('systeminformation')

const visiD = require('../../models/visidata')
const { json } = require('body-parser')

router.route('/')
  .get((req, res) => {
    var visidata = [];
    var storeVisiData = [];
    sysinfo.system(function (system) {
      storeVisiData.push(system)
    })
    sysinfo.users(function (user) {
      storeVisiData.push(user[0])
      storeVisiData.push(user[0].user)
    })
    sysinfo.osInfo(function (osinfo) {
      storeVisiData.push(osinfo)
      // Save to DB
      var newVisiData = new visiD({
        System: storeVisiData[0],
        User: storeVisiData[1],
        VisitorName: storeVisiData[2],
        osInfo: storeVisiData[3]
      })
      visiD.find({ VisitorName: storeVisiData[2] })
        .exec(
          function (err, doc2) {
            if (doc2.length) {
              return 1
            } else {
              newVisiData.save()
            }
          });
    })
    // Goes to Client
    sysinfo.battery(function (btry) {
      visidata.push(btry.ischarging)
      visidata.push(btry.percent)
      res.json(visidata)
    })
  })

module.exports = router;