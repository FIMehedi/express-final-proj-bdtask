const { model, Schema } = require('mongoose');

// View Schema
var viewSchema = new Schema(
	{
		postid: {
			type: String,
			index: true,
		},
		userip: {
			type: String,
		},
		method: {
			type: String,
		},
		host: {
			type: String,
		},
		url: {
			type: String,
		},
		referer: {
			type: String,
		},
		user_agent: {
			type: String,
		},
		country: {
			type: String,
		},
		device: {
			type: String,
		},
		platform: {
			type: String,
		},
		operating: {
			type: String,
		},
		browser: {
			type: String,
		},
		browser_version: {
			type: String,
		},
		time_zone: {
			type: String,
		},
		asn: {
			type: String,
		},
		asn_org: {
			type: String,
		},
	},
	{
		timestamps: true,
		versionKeys: false,
	}
);

module.exports = model('View', viewSchema);
