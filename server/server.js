const express = require('express');
const Mongoose = require('mongoose');
const url = "mongodb://localhost:27017/blog-post";
// const url = "mongodb://localhost:27017/todo-list";
const collectionName = "blogs";
// const collectionName = "items";
Mongoose.connect(url, { useNewUrlParser: true });
const Schema = new Mongoose.Schema({
	_id: Number,
	status: Boolean,
});
const Blog = Mongoose.model(collectionName, Schema);
// const url = "mongodb://localhost:27017/blog-post";
// const collectionName = "blogDetails";
// Mongoose.connect(url,{ useNewUrlParser: true });
// const Schema = new Mongoose.Schema({
// 	_id: Number,
// 	// todoList: Array,
// 	getBlogHeader: String,
// 	getBlogDescription: String
// })
// const Blog = Mongoose.model(collectionName, Schema);
// console.log(Blog.find())
const app = express();
app.get('/test', async function(req, res){
	Blog.find({},function(err, d){
		console.log(d)
	})
})

app.listen(3000, ()=> console.log("Server is running in 3000..............."))