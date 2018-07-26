const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true, //不可重复约束
    require: true //不可为空约束
  },
  password: {
    type: String,
    require: true
  },
  token: {
    type: String
  }
})

// 添加用户保存时中间件对password进行bcrypt加密
UserSchema.pre('save', function (next) {
  var user = this
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err)
      }
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) {
          return next(err)
        }
        user.password = hash
        next()
      })
    })
  }else {
    return next()
  }
})

// 校验用户输入密码是否正确
UserSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, (err, isMatch) => {
      if (err) {
          return cb(err);
      }
      cb(null, isMatch);
  });
};


const User = mongoose.model('users', UserSchema)

module.exports = User