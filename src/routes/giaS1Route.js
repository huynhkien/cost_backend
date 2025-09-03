const giaS1Controllers = require('../controllers/giaS1Controller');
const express = require('express');
const router = express.Router();

router.route('/').get(giaS1Controllers.get_giaS1);

module.exports = router;