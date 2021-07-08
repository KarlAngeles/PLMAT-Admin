const mongoose = require('mongoose')
const { Schema } = mongoose

const resultSchema = new Schema({
  test_taker: {
    type: Schema.Types.ObjectId,
    ref: 'Test Takers'
  },
  math_score: String,
  science_score: String,
  english_score: String,
  filipino_score: String,
  abstract_score: String,
})

const Results = mongoose.model('Results', resultSchema)
module.exports = { resultSchema, Results }
