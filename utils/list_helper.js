/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
const dummy = (blogs) => {
	return 1
}

// Define a new totalLikes function that receives a list of blog posts as a parameter. The function returns the total sum of likes in all of the blog posts.

const totalLikes = (blogs) => {

	const reducer = (sum, item) => {
		return sum + item
	}
	return blogs.length === 0 ? 0 : blogs.map(blog => blog.likes).reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
	let result = blogs.find(blog => blog.likes === Math.max(...blogs.map(blog => blog.likes)))
	if(result){
		return {
			title: result.title,
			author: result.author,
			likes: result.likes
		}
	}
}

const mostBlogs = (blogs) => {
	let result = {
		author: '',
		blogs: 0
	};
	for(let i = 0; i < blogs.length; i++){
		let c = 0;
		for(let j = i; j < blogs.length; j++){
			if(blogs[j].author === blogs[i].author){
				c = c + 1;
			}else{
				continue;
			}
		}
		if(c > result.blogs) {
			result.author = blogs[i].author;
			result.blogs = c;
		}
	}
	return result;
}

const mostLikes = (blogs) => {
	let result = blogs.reduce((prev, current) => {
		if(current.likes > prev.likes) {
			return current
		}
		return prev
	}, {...blogs[0]})

	return {
		author: result.author,
		likes: result.likes
	}
}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes
}