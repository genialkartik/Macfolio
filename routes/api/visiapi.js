const express = require('express')
const router = express.Router()
const sysinfo = require('systeminformation')

const visiD = require('../../models/visidata')

router.route('/')
    .get((req, res) => {
        var visidata = [];
        var storeVisiData = [];
        sysinfo.system(function (system) {
            storeVisiData.push(system)
        })
        sysinfo.users(function (user) {
            storeVisiData.push(user[0])
        })
        sysinfo.osInfo(function (osinfo) {
            storeVisiData.push(osinfo)
            visiD.find({
                User: {
                    user: 'tyagi'
                }
            })
            .then(data=>console.log(data))

            // var newVisiData = new visiD({
            //     System: storeVisiData[0],
            //     User: storeVisiData[1],
            //     osInfo: storeVisiData[2]
            // })
            // newVisiData.save()
            // .then(data=>console.log(data))
        })
        sysinfo.battery(function (btry) {
            visidata.push(btry.ischarging)
            visidata.push(btry.percent)
            res.json(visidata)
        })
    })

module.exports = router;