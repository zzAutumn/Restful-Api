const mongoose = require('mongoose')
const { Schema } = require('mongoose')


const ArticleSchema = new Schema({
  title: {
    type: String
  },
  author: {
    type: String
  },
  content: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Article = mongoose.model('article', ArticleSchema)

module.exports = Article
