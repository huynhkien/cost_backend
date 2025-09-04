const dmKHControllers = require('../controllers/dmKHController');
const express = require('express');
const router = express.Router();

router.route('/').get(dmKHControllers.get_dmKH);


module.exports = router;