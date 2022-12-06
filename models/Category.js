const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
	{
		slug: {
			type: String,
			index: true,
		},
		title: {
			type: String,
		},
		parent_cat: {
			type: String,
		},
		seo_description: {
			type: String,
		},
		seo_keywords: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model('Category', categorySchema);
