const dmSanNVLControllers = require('../controllers/dmSanNVLController');
const express = require('express');
const router = express.Router();

router.route('/').get(dmSanNVLControllers.get_dmSanNVL);


module.exports = router;