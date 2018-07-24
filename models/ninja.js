const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  }
  // add in geo location
})

const Ninja = mongoose.model('ninja', NinjaSchema)
module.exports = Ninja