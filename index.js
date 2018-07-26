const express = require('express')
const routes = require('./routes/user')
const articleRoutes = require('./routes/article')
const mongoose = require('mongoose')
const morgan = require('morgan')
const passport = require('passport') //用户认证模块passport
const Strategy = require('passport-http-bearer').Strategy // token验证模块
// set up express app
const app = express()

// connect to mongoDb
mongoose.connect('mongodb://dds-8vb67d55bd7f8cb41776-pub.mongodb.zhangbei.rds.aliyuncs.com:3717/local',{authSource: 'admin', user: 'root' ,pass: 'PASS1234a', useNewUrlParser: true, autoIndex: false })
mongoose.Promise = global.Promise

app.use(express.json({type: 'application/json'}))
app.use(express.urlencoded({ extended: true }))
// initialise routes

app.use('*',function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next()
})

app.use('/api', routes)
app.use('/api', articleRoutes)


// 命令行中显示程序运行日志,便于bug调试
app.use(morgan('dev'))

// 初始化passport模块
app.use(passport.initialize())
// error handler
app.use(function (err, req, res, next) {
  console.log(err)
  res.status(422).send({error: err.message})
})


// listen for requests
app.listen(process.env.port || 3000, function() {
  console.log('now listening for requests on port 3000 ...')
})

