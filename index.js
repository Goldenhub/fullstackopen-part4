/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	likes: {
		type: String,
		required: true
	}
})

const Blog = mongoose.model('Blogs', blogSchema)

const mongoUrl = process.env.MONGODB_URI

console.log('connecting to', mongoUrl)

mongoose.connect(mongoUrl)
	.then(() => {
		console.log('connected to MongoDB')
	})
	.catch(err => {
		console.error(err.message)
	})

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
	Blog.find({})
		.then(blogs => {
			response.json( { status: 200, message: 'successful', data: blogs } )
		})
})

app.post('/api/blogs', (request, response) => {
	const blog = new Blog(request.body)

	blog.save()
		.then(result => {
			response.status(201).json( { status: 201, message: 'blog created', data: result } )
		})
})

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})