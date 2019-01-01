var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/attendance');

var Attendance = mongoose.model('attend', mongoose.Schema({
	usn:String,
	name:String,
	sub1:String,
	sub2:String,
	sub3:String,
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

app.get('/api/attendance', function(req, res){
	Attendance.find(function(err, attendances){
		if(err)
			res.send(err);
		res.json(attendances);
	});
});

app.get('/api/attendance/:id', function(req, res){
	Attendance.findOne({_id:req.params.id}, function(err, attendance){
		if(err)
			res.send(err);
		res.json(attendance);
	});
});

app.post('/api/attendance', function(req, res){
	Attendance.create( req.body, function(err, attendance){
		if(err)
			res.send(err);
		res.json(attendance);
	});
});

app.delete('/api/attendance/:id', function(req, res){
	Attendance.findOneAndRemove({_id:req.params.id}, function(err, attendance){
		if(err)
			res.send(err);
		res.json(attendance);
	});
});

app.put('/api/attendance/:id', function(req, res){
	var query = {
		usn:req.body.usn,
		name:req.body.name,
		sub1:req.body.sub1,
		sub2:req.body.sub2,
		sub3:req.body.sub3,
	};
	Attendance.findOneAndUpdate({_id:req.params.id}, query, function(err, attendance){
		if(err)
			res.send(err);
		res.json(attendance);
	});
});

app.listen(3001, function(){
	console.log('server is running on port 3001..');
});
