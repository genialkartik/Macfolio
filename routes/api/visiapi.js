const express = require('express')
const router = express.Router()
const sysinfo = require('systeminformation')

const visiD = require('../../models/visidata')

router.route('/')
  .get((req, res) => {
    var visidata = []
    sysinfo.battery(function (btry) {
      visidata.push(btry.ischarging)
      visidata.push(btry.percent)
      res.json(visidata)
    })
  })

module.exports = router;