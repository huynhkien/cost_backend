const giaVTDGControllers = require('../controllers/giaVTDGController');
const express = require('express');
const router = express.Router();

router.route('/').get(giaVTDGControllers.get_giaVTDG);

module.exports = router;