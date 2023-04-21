const express = require('express');
const router = express.Router();
const UserController = require('../Controller/User.controller');

router.get('/all', UserController.showAll)
router.get('/find/:id', UserController.show);
router.post('/create', UserController.create);
router.put('/update/:id', UserController.update);
router.delete('/delete/:id', UserController.delete);

module.exports = router;
