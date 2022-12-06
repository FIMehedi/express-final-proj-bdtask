const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports.signupGetController = (req, res, next) => {
	console.log('path', req.path);
	res.render('signup', {
		data: {
			title: 'Sign Up',
			path: req.path,
			flashMsg: req.flash('info')[0],
		},
	});
};

module.exports.signupPostController = async (req, res, next) => {
	if (req.body.password !== req.body.repeat_password) {
		console.log('not matched');
		req.flash('info', 'Confirm password is not matched');
		return res.redirect('/user/signup');
	}

	const findUser = await User.findOne({ email: req.body.email });

	if (findUser?.email === req.body.email) {
		req.flash('info', 'This email is already in use');
		return res.redirect('/user/signup');
	}

	const prepareUser = {
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: await bcrypt.hash(req.body.password, 12),
	};

	try {
		const newUser = new User(prepareUser);
		await newUser.save();
		req.flash('info', `${newUser.name}, your account has been created`);
		return res.redirect('/user/login');
	} catch (err) {
		req.flash('info', err.message);
		console.error(err.message);
		return res.redirect('/user/signup');
	}
};

module.exports.loginGetController = (req, res, next) => {
	console.log(req.path);
	const flashMsg = req.flash('info')[0];
	res.render('login', {
		data: { title: 'Login', path: req.path, flashMsg },
	});
};

module.exports.loginPostController = async (req, res, next) => {
	const { email, password } = req.body;

	try {
		const findUser = await User.findOne({
			$or: [
				{ email: req.body.emailOrUsername },
				{ username: req.body.emailOrUsername },
			],
		});

		if (!findUser) {
			req.flash('info', 'User not found');
			return res.redirect('/user/login');
		}

		const passMatched = await bcrypt.compare(password, findUser.password);

		if (!passMatched) {
			req.flash('info', 'Password mismatch');
			return res.redirect('/user/login');
		}

		req.session.user = findUser;
		req.session.isAuthenticated = true;
		req.flash('info', `Welcome back, ${findUser.name}`);
		return res.redirect('/');
	} catch (err) {
		console.error(err.message);
		return res.redirect('/user/login');
	}
};

module.exports.logoutController = (req, res, next) => {
	req.session.destroy((err) => {
		if (err) {
			console.info(err.message);
			next(err);
		}
		return res.redirect('/');
	});
};
