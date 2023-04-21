const express = require('express');
const router = express.Router();
const UploadController = require('../Controller/Upload.controller');

router.post('/upload', UploadController.upload.single('file'), UploadController.uploadFile);

module.exports = router;
