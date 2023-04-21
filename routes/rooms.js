const express = require('express');
const router = express.Router();
const RoomController = require('../Controller/Room.controller');

router.get('/all', RoomController.showAll)
router.get('/find/:id', RoomController.show);
router.post('/create', RoomController.create);
router.put('/update/:id', RoomController.update);
router.delete('/delete/:id', RoomController.delete);

module.exports = router;
