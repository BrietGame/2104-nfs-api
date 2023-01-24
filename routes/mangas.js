const express = require('express');
const router = express.Router();
const MangaController = require('../Controller/Manga.controller');

router.get('/getManga', (req, res) => {
    res.json('Tout est ok')
})

router.post('/createManga', MangaController.create)

module.exports = router;
