const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static('../build'))
app.use(express.static('../build/static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const url = "mongodb://localhost:27017/blog-post";
const collectionName = "blogs";
Mongoose.connect(url, { useNewUrlParser: true });
const Schema = new Mongoose.Schema({
	_id: Number,
	status: Boolean,
	blogHeader: String,
	blogDescription: String
});
const Blog = Mongoose.model(collectionName, Schema);

app.get('/', function(req, res){
	res.sendFile("../public/index.html")
	// res.send("worked")
})

app.post('/api/blogs', async function(req, res){
	Blog.create(req.body, function(err, d){
		if(err)
			res.status(500).send("err ")
		else
			res.status(200).send("data send")
	})
})

app.get('/api/blogs', async function(req, res){
	Blog.find(function(err, d){
		if(err)
			res.status(500).send(err)
		else
			res.status(200).send(d)
	})
})

app.delete('/api/blogs/:id', async function(req, res){
	let thisId = Number(req.params.id);
	Blog.findByIdAndRemove({_id: thisId}, function(err, d){
		const deltedItem = thisId+" id is deleted"
		if(err)
			res.status(500).send(err)
		else
			res.status(200).send(deltedItem)
	});
})

app.put('/api/blogs/:id', async function(req, res){
	let thisId = Number(req.params.id);
	Blog.findByIdAndUpdate({_id: thisId}, req.body, function(err,d){
		if(err)
			res.status(500).send(err)
		else
			res.send(req.body)
	});
});

app.listen(3000, ()=> console.log("Server is running........."))