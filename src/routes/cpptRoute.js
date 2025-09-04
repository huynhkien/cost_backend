const cpptControllers = require('../controllers/cpptController');
const express = require('express');
const router = express.Router();

router.route('/02').get(cpptControllers.get_cppt02);
router.route('/s1').get(cpptControllers.get_cpptS1);


module.exports = router;