const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/article', function (req, res) {
  res.json({message: "testtest"})
})

// 保存文章
router.post('/article/save', function (req, res) {
  var newArticle = new Article(Object.assign({}, req.body))
  newArticle.save(err => {
    if (err) {
      console.log(err)
      res.json({message: err.message})
    } else {
      res.json({success: true, message: "保存文章成功！"})
    }
  })
})

// 查看所有文章
router.get('/article/viewAll', function (req, res, next) {
  Article.find({}, function (err, articles) {
    if (err) return  handleError(err)
    res.send(articles)
  })
})

router.get('/', function (req, res) {
  console.log('get ////')
  res.send(JSON.stringify({name: "tom"}))
})


module.exports = router

