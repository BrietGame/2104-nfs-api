const express = require('express');
const router = express.Router();
const UserController = require('../Controller/User.controller');
const auth = require("../Middleware/auth");

router.get('/all', auth, UserController.showAll)
router.get('/find/:id', auth, UserController.show);
router.post('/create', auth, UserController.create);
router.put('/update/:id', auth, UserController.update);
router.delete('/delete/:id', auth, UserController.delete);

module.exports = router;
