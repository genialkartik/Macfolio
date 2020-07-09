const express = require('express')
const router = express.Router()

const visiD = require('../../models/visidata')

// @route GET api/visidata
// @desc  get vister's data

router.route('/')
    .get((req, res)=>{
        visiD.find()
            .sort({ date: -1 })
            .then(data => res.json(data))
    })
    .post((req, res)=>{
        const newVisi = new visiD({
            name: req.body.name,
            battery: req.body.battery,
            wifi: req.body.wifi
        })
        newVisi.save().then(data=>res.json(data))
    })

router.route('/:visid')
    .delete((req, res)=>{
        visiD.findById(req.params.visid)
        .then(data => data.remove().then(()=>res.json({success: true})))
        .catch(err=> res.status(404).json({success: false}))
    })

module.exports = router;