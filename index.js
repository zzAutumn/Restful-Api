const express = require('express')
const routes = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// set up express app
const app = express()

// connect to mongoDb
mongoose.connect('mongodb://127.0.0.1:27017/ninja', { useNewUrlParser: true })
mongoose.Promise = global.Promise

// use body-parser middleware
app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }));

// initialise routes
app.use('/api', routes)

app.get('/api', function(req, res) {
  res.send({name: 'tom'})
})

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests on port 4000 ...')
})

