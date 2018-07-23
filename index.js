const express = require('express')
const routes = require('./routes/api')

// set up express app
const app = express()

// initialise routes
app.use('/api', routes)

app.get('/api', function(req, res) {
  res.send({name: 'tom'})
})

// listen for requests
app.listen(process.env.port || 4000, function() {
  console.log('now listening for requests ...')
})

