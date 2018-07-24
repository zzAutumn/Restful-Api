const mongoose = require('mongoose')
const Schema = mongoose.Schema
/*
// create geolocation schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: 'point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
})

// create ninja schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is reuiqred']
  },
  rank: {
    type: String
  },
  vailable: {
    type: Boolean,
    default: false
  },
  // add in geo location
  geometry: GeoSchema
})

const Ninja = mongoose.model('ninja', NinjaSchema)
*/

const UserSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  }
})

const User = mongoose.model('user', UserSchema)

module.exports = User