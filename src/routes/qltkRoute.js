const qltkControllers = require('../controllers/qltkController');
const express = require('express');
const router = express.Router();

router.route('/').get(qltkControllers.get_qltk)

module.exports = router;