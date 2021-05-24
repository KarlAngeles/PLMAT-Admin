const mongoose = require('mongoose')
const { Schema } = mongoose

const testTakersSchema = new Schema({
  username: String,
  password: String,
  name: String,
  passed: Boolean,
  has_taken_exam: Boolean
})

const testTakers = mongoose.model('Test Takers', testTakersSchema)

module.exports = { testTakersSchema, testTakers }
