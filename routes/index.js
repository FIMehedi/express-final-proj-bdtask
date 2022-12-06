const express = require('express');
const {
	indexGetController,
	postViewGetController,
} = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', indexGetController);
router.get('/post/:slug', postViewGetController);

module.exports = router;
