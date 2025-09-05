const dmControllers = require('../controllers/dmController');
const express = require('express');
const router = express.Router();

router.route('/nvl').get(dmControllers.get_dsNVL);
router.route('/vtdg').get(dmControllers.get_dsVTDG);
router.route('/ct').get(dmControllers.get_dsCONGTHUC);

router.route('/detail-ct').get(dmControllers.get_dsCTDetail);


module.exports = router;