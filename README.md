# Simple Bloglist Node App

## implementing standard node directory struture

### Dependencies

- express
- mongoose
- dotenv
- cors

### Dev Dependencies

- eslint
- nodemon

## Directory structure

```javascript
├── index.js
├── app.js
├── controllers
│   ├──blogs.js
├── package-lock.json
├── package.json
├── utils
    ├── config.js
    ├── logger.js
    └── middleware.js
├── models
    ├── blog.js
```

## How to run

- Clone the repo
- Run `npm install`
- Run `npm run dev` to start the server with nodemon
- Run `npm start` to start the server without nodemon
- Use a Postman or any Rest Client to test the endpoints

- ```javascript
  // GET all blogs
  GET http://localhost:3003/api/blogs
  
  // POST a blog
  POST http://localhost:3003/api/blogs
    {
        "title": "Blog Title",
        "author": "Blog Author",
        "url": "Blog URL",
        "likes": 0
    }
  ```

### Note

- the server will run in PORT 3003 by default. You can change this in your .env file.
- MongoDB database was used for this project. You can change the database name in your .env file.

## How to lint

- Run `npm run lint`
