/* eslint-disable linebreak-style */
const { error } = require('./logger')

const unknownEndpoints = (request, response) => {
	response.json({ status: 404, message: 'Unknown Route' })
}

const errorHandler = (err, request, response, next) => {
	switch (err.name) {
	case 'ValidationError':
		response.json( { status: 409, message: err.message } )
		break
	case 'SyntaxError':
		response.json( { status: 409, message: 'check the syntax of your payload' } )
		break
	default:
		error(err.message)
	}

	next(err)
}

module.exports = {
	unknownEndpoints,
	errorHandler
}