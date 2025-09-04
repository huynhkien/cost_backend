const priceVNDControllers = require('../controllers/priceVNDController');
const express = require('express');
const router = express.Router();

router.route('/').get(priceVNDControllers.get_priceVND)

module.exports = router;