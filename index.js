const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express()

// connect to mongoDb
mongoose.connect('mongodb://dds-8vb67d55bd7f8cb41776-pub.mongodb.zhangbei.rds.aliyuncs.com:3717/local',{authSource: 'admin', user: 'root' ,pass: 'PASS1234a', useNewUrlParser: true })
mongoose.Promise = global.Promise

// use body-parser middleware
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }));

// initialise routes
app.use('/api', routes)

// error handler
app.use(function (err, req, res, next) {
  console.log(err)
  res.status(422).send({error: err.message})
})
app.get('/api', function(req, res) {
  res.send({name: 'tom'})
})

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests on port 4000 ...')
})

