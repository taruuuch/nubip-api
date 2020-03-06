const uriPrefix = '/api/v1'

// Server
const port = process.env.PORT

// Database
const dbUri = process.env.DB_URI
const dbUser = process.env.DB_USERNAME
const dbPassowrd = process.env.DB_PASSWORD

// Auth
const authSecret = process.env.SECRET_KEY || undefined
const authAccessExpires = process.env.ACCESS_EXPIRES || 36000
const authRefreshExpires = process.env.REFRESH_EXPIRES || 36000

module.exports = {
	port,
	dbUri,
	dbUser,
	dbPassowrd,
	authSecret,
	authAccessExpires,
	authRefreshExpires,
	uriPrefix
};
