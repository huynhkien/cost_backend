const dmS1Controllers = require('../controllers/dmS1Controller');
const express = require('express');
const router = express.Router();

router.route('/').get(dmS1Controllers.get_dmS1);


module.exports = router;