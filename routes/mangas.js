const express = require('express');
const router = express.Router();
const MangaController = require('../Controller/Manga.controller');

router.get('/getMangas', MangaController.showAll)
router.get('/getManga/:id', MangaController.show);
router.post('/createManga', MangaController.create);
router.put('/updateManga/:id', MangaController.update);
router.delete('/deleteManga/:id', MangaController.delete);

module.exports = router;
