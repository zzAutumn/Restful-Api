const express = require('express')
const router = express.Router()
const User = require('../models/ninja')

// get a list of ninjas from the db
router.get('/user', function(req, res, next) {
  User.find({}, function (err, data) {
    if (err) {
      console.log(err)
    }
    res.send(data)
  })
})

//add a new ninja to the db
router.post('/user',function(req, res, next) {
  User.create(req.query).then(function (user) {
    res.send(user)
  }).catch(next)
})

//update a new ninja to the db
router.put('/user/:username', function(req, res, next) {
  User.findOneAndUpdate({username: req.params.username}, req.query).then(function () {
    User.findOne({username: req.params.username}).then(function (user) {
      res.send(user)
    })
  }).catch(next)
})

//delete a new ninja to the db
router.delete('/user/:username', function(req, res, next) {
  User.deleteOne({username: req.params.username}).then(function (user) {
    if (user.ok == 1) {
      console.log('删除成功')
    }
    res.send(user)
  }).catch(next)
})

module.exports = router