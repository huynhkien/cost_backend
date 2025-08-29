const dmCU2Controllers = require('../controllers/dmCU2Controller');
const express = require('express');
const router = express.Router();

router.route('/').get(dmCU2Controllers.get_dmCU2)
                 .post(dmCU2Controllers.create_dmCU2);

router.route('/:id').put(dmCU2Controllers.edit_dmCU2)
                    .delete(dmCU2Controllers.delete_dmCU2);

module.exports = router;