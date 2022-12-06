const express = require('express');
const router = express.Router();

// Import Controllers
const {
	signupPostController,
	signupGetController,
	loginGetController,
	loginPostController,
	logoutController,
} = require('../controllers/userController');
const { isUnauthenticated } = require('../middlewares/authMiddlewares');

/* GET users listing. */
router.get('/signup', isUnauthenticated, signupGetController);
router.post('/signup', signupPostController);

router.get('/login', isUnauthenticated, loginGetController);
router.post('/login', loginPostController);
router.get('/logout', logoutController);

module.exports = router;
