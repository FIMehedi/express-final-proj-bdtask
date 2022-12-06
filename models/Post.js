const { Schema, model } = require('mongoose');

const postSchema = new Schema(
	{
		title: {
			type: String,
			trim: true,
			required: true,
		},
		slug: {
			type: String,
			trim: true,
			required: true,
			index: true,
		},
		description: {
			type: String,
			trim: true,
			required: true,
		},
		tag: {
			type: String,
			trim: true,
			required: true,
		},
		featured_image: {
			type: String,
			trim: true,
		},
		author: {
			type: String,
			trim: true,
			required: true,
		},
		seo_description: {
			type: String,
		},
		seo_keywords: {
			type: String,
		},
		view: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model('Post', postSchema);
