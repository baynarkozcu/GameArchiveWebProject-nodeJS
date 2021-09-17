const router = require('express').Router();
const controller = require('../controllers/gameController');

router.get('/:id', controller.GameDetail);


module.exports = router;