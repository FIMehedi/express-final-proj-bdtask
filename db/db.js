const mongoose = require('mongoose');
const { db } = require('../config/config');

if (!db.url) return console.info('Database url required!');

try {
	mongoose.connect(
		db.url,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		(error) =>
			error
				? console.error(error.message)
				: console.info(`Database Successfully Connected!`)
	);
} catch (error) {
	console.error(error.message);
	console.info('Database connection error');
}
