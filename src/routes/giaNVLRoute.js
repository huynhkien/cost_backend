const giaNVLControllers = require('../controllers/giaNVLController');
const express = require('express');
const router = express.Router();

router.route('/').get(giaNVLControllers.get_giaNVL);

module.exports = router;