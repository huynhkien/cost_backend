const khCsThangControllers = require('../controllers/khCsThangController');
const express = require('express');
const router = express.Router();

router.route('/').get(khCsThangControllers.get_khCsThang)

module.exports = router;