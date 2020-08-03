const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')

const Folders = require('../../models/folder')
const Files = require('../../models/file')

const staticPath = path.join(__dirname, '../../client/public/documents/')

router.route('/file')
    .post((req, res, files) => {
        if (req.files === null) {
            return res.status(400).json(null)
        }
        const newFile = new Files({
            fileName: req.files.filetoupload.name,
            itemType: req.files.filetoupload.mimetype,
            fileSize: req.files.filetoupload.size,
            filePath: req.body.itempath
        })
        req.files.filetoupload.mv(staticPath + req.files.filetoupload.name.replace(/\s/g, ''), err => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            console.log('file uploaded')
            newFile.save()
                .then(item => res.json(item))
        })
    })
    .delete((req, res) => {
        Files.findById(req.query.delId)
            // .then(file => file.remove().then(() => res.json({ success: true })))
            .exec(
                function (err, file) {
                    if (err) {
                        err => res.status(404).json({ success: false })
                    }
                    file.remove().then(() => {
                        fs.unlink(staticPath + file.fileName.replace(/\s/g, ''), (err) => {
                            if (err) { throw err; }
                            res.json({ success: true })
                        })
                    })
                })
    })

router.route('/folder')
    .get((req, res) => {
        Folders.find({ folderPath: req.query.wpath })
            .sort({ folderName: 1 })
            .exec(
                function (err, doc) {
                    Files.find({ filePath: req.query.wpath })
                        .sort({ fileName: 1 })
                        .exec(
                            function (err, doc2) {
                                var items = [...doc, ...doc2]
                                res.json(items)
                            });
                });
    })
    .post((req, res) => {
        const newFolder = new Folders({
            folderName: req.body.fname,
            itemType: req.body.ftype,
            folderSize: req.body.fsize,
            folderPath: req.body.fpath
        })
        newFolder.save()
            .then(item => res.json(item))
    })
    .delete((req, res) => {
        Folders.findById(req.query.delId)
            .then(folder => folder.remove().then(() => res.json({ success: true })))
            .catch(err => res.status(404).json({ success: false }))
    })



module.exports = router