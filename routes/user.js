const express = require('express')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const router = express.Router()
const User = require('../models/user')
const assert = require('assert')

/**
 * 注册提交
 */
router.post('/signup', function (req, res) {
  console.log(req.body)
  var newUser = {
    name: req.body.name,
    password: req.body.password
  }
  User.create(newUser, function (err, doc) {
    if (err) {
      res.send({
        success: false,
        message: '创建失败'
      })
    } else {
      res.send({
        success: true,
        returnData: doc
      })
    }
  })
})

/**
 * 登录提交
 */

// 检查用户名与密码并生成一个accesstoken如果验证通过
router.post('/user/accesstoken', (req, res) => {
  User.findOne({
    name: req.body.name
  }, (err, user) => {
    if (err) {
      throw err
    }
    if (!user) {
      res.json({success: false, message: 'authenrity failed, user dose not exist'})
    } else if (user) {
      // 检查密码是否正确
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          var token = jwt.sign({name: user.name}, 'yesdsdfsldfjls', {
            expiresIn: 10080  // token到期时间设置
          })
          user.token = token
          user.save(function (err) {
            if (err) {
              res.send(err)
            }
          })
          res.json({
            success: true,
            message: '验证成功！',
            token: 'Bearer' + token,
            name: user.name
          })
        } else {
          res.send({success: false, message: '认证失败，密码错误'})
        }
      })
    }
  })
})

// passport-http-bearer token 中间件验证
// 通过 header 发送 Authorization -> Bearer  + token
// 或者通过 ?access_token = token
router.get('/users/info',
  passport.authenticate('Bearer', { session: false }),
  function(req, res) {
    res.json({username: req.user.name});
});



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