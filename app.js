/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express')
const app = express()
const cors = require('cors')
const { info, error } = require('./utils/logger')
const { MONGODB_URI } = require('./utils/config')
const blogRouter = require('./controllers/blogs')
const { unknownEndpoints, errorHandler } = require('./utils/middleware')


const mongoose = require('mongoose')


info('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
	.then(() => {
		info('connected to MongoDB')
	})
	.catch(err => {
		error(err.message)
	})

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)
app.use(unknownEndpoints)
app.use(errorHandler)



module.exports = app