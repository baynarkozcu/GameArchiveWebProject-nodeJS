const router = require('express').Router();
const controller = require('../controllers/homeController');


router.get('/', controller.HomePage, );
router.get('/home', controller.HomePage);
router.post('/', controller.SearchResultView);


module.exports = router;