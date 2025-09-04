const ctCongThucControllers = require('../controllers/ctCongThucController');
const express = require('express');
const router = express.Router();

router.route('/').get(ctCongThucControllers.get_ctCongThuc);


module.exports = router;