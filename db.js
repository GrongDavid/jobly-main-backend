'use strict'
/** Database setup for jobly. */
const { Client } = require('pg')
const { getDatabaseUri, DB_PASSWORD } = require('./config')

let db

if (process.env.NODE_ENV === 'production') {
	db = new Client({
		host: 'dpg-cgfohgm4daddcg0r0oig-a/jobly_7zwz',
		port: 5432,
		user: 'jobly_7zwz_user',
		password: DB_PASSWORD,
		ssl: {
			rejectUnauthorized: false,
		},
	})
} else {
	db = new Client({
		connectionString: getDatabaseUri(),
	})
}

db.connect()

module.exports = db
