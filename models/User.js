const { model, Schema } = require('mongoose');

const userSchema = new Schema(
	{
		username: {
			type: String,
			index: true,
			trim: true,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			trim: true,
			required: true,
		},
		profilePicUrl: {
			type: String,
		},
		role: {
			type: String,
			default: 'user',
		},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model('User', userSchema);
