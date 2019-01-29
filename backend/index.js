var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();
const route = require('./route/routes')

mongoose.connect('mongodb://localhost:27017/wikiweb');


mongoose.connection.on('connected', ()=>{
    console.log('MongoDB connected at port 27017')
});

mongoose.connection.on('error', ()=>{
    console.log(err)
});


const PORT = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);

app.get('/',(req, res)=>{
    res.send('test')
});

app.listen(PORT, ()=>{
    console.log('Server has been started at port:')
});
