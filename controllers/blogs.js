/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const Blog = require('../models/blog')
const blogRouter = require('express').Router()

blogRouter.get('/', (request, response, next) => {
	Blog.find({})
		.then(blogs => {
			response.json( { status: 200, message: 'successful', data: blogs } )
		})
		.catch(err => next(err))
})

blogRouter.post('/', (request, response, next) => {
	const blog = new Blog(request.body)

	blog.save()
		.then(result => {
			response.status(201).json( { status: 201, message: 'blog created', data: result } )
		})
		.catch(err => next(err))
})

module.exports = blogRouter