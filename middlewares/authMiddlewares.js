module.exports.isAuthenticated = (req, res, next) => {
	if (!req.session.isAuthenticated) return res.redirect('/user/login');
	next();
};

module.exports.isUnauthenticated = (req, res, next) => {
	if (req.session.isAuthenticated) return res.redirect('/');
	next();
};

module.exports.isAdmin = (req, res, next) => {
	if (req.session?.user?.role === 'admin') {
		next();
	} else {
		req.flash('info', 'You are not allowed to access this page.');
		return res.redirect('/');
	}
};
