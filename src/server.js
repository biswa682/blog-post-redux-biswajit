import express from 'express';
import Mongoose from 'mongoose'
const url = "mongodb://localhost:27017/blog-post";
const collectionName = "blogDetails";
Mongoose.connect(url,{useNerUrlParser: true});
const Schema = new Mongoose.Schema({
	_id: Number,
	todoList: Array,
	getBlogHeader: String,
	getBlogDescription: String
})
const Blog = Mongoose.model(collectionName, Schema);
const app = express();


app.listen(3000, ()=> console.log("Server is running in 3000..............."))