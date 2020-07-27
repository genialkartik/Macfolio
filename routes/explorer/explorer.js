const express = require('express')
const router = express.Router()

const Folders = require('../../models/folder')
const Files = require('../../models/file')
const { connection } = require('mongoose')

router.route('/:wdata/:wfolder')
.get((req, res)=>{
    Files.find({filePath: req.params.wdata+'/'+req.params.wfolder})
        .sort({ fileName: 1})
        .then(items => res.json(items))
})
.post((req, res) => {
    const newFile = new Files({
        fileName: req.body.filename,
        fileType: req.body.filetype,
        fileSize: req.body.filesize,
        filePath: req.body.filepath
    })
    newFile.save()
        .then(item => res.json(item))
})

router.route('/:wdata')
.get((req, res)=>{
    Folders.find({folderPath: req.params.wdata})
        .sort({ folderName: 1})
        .then(items => res.json(items))
})
.post((req, res) => {
    const newFolder = new Folders({
        folderName: req.body.fname,
        folderSize: req.body.fsize,
        folderPath: req.body.fpath
    })
    newFolder.save()
        .then(item => res.json(item))
})

router.route('/:folderId')
.delete((req, res)=>{
    Folders.findById(req.params.folderId)
        .then(folder => folder.remove().then(()=>res.json({ success: true })))
        .catch(err=> res.status(404).json({success: false}))
})


module.exports = router