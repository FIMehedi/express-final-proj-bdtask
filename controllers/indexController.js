const Post = require('../models/Post');

module.exports.indexGetController = async (req, res, next) => {
	const flashMsg = req.flash('info')[0];

	try {
		const posts = await Post.find({});
		console.log(posts);
		res.render('index', {
			data: {
				title: 'Express',
				isAuthenticated: req.session.isAuthenticated,
				user: req.session.user,
				flashMsg,
				posts: posts,
			},
		});
	} catch (error) {
		console.error(error.message);
	}
};

module.exports.postViewGetController = async (req, res, next) => {
	try {
		const post = await Post.findOne({ slug: req.params.slug });
		console.log(post);
		const data = {
			post: post,
			title: post.title,
			isAuthenticated: req.session.isAuthenticated,
			user: req.session.user,
		};
		res.render('postView', { data });
	} catch (error) {
		console.error(error.message);
	}
};
