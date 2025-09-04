const dmDGControllers = require('../controllers/dmDGController');
const express = require('express');
const router = express.Router();

router.route('/hu').get(dmDGControllers.get_dmDGHu);
router.route('/bich').get(dmDGControllers.get_dmDGBich);
router.route('/tui').get(dmDGControllers.get_dmDGTui);
router.route('/bao').get(dmDGControllers.get_dmDGBao);
router.route('/bigbag').get(dmDGControllers.get_dmDGBigBag);


module.exports = router;