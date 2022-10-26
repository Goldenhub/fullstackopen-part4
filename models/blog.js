/* eslint-disable linebreak-style */
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
		required: true,
		validate: {
			validator: (value) => {
				return /^(https?:\/\/)[\W\w]+/.test(value)
			},
			message: (prop) => `${prop.value} is not a valid url`
		}
	},
	likes: {
		type: String,
		required: true
	}
})

blogSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id
		delete returnedObject.__v
		delete returnedObject._id
	}
})

module.exports = mongoose.model('Blogs', blogSchema)

