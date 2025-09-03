const giaCU2Controllers = require('../controllers/giaCU2Controller');
const express = require('express');
const router = express.Router();

router.route('/').get(giaCU2Controllers.get_giaCU2);

module.exports = router;