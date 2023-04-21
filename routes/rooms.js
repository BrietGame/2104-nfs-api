const express = require('express');
const router = express.Router();
const RoomController = require('../Controller/Room.controller');
const auth = require('../Middleware/auth');

router.get('/all', auth, RoomController.showAll)
router.get('/find/:id', auth, RoomController.show);
router.post('/create', auth, RoomController.create);
router.put('/update/:id', auth, RoomController.update);
router.delete('/delete/:id', auth, RoomController.delete);

module.exports = router;
