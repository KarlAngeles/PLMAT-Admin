const mongoose = require('mongoose')
const { Schema } = mongoose

const testTakersSchema = new Schema({
  username: String,
  password: String,
  name: String,
  passed: {
    type: Boolean,
    default: function () {
      return false;
    }
  },
  has_taken_exam: {
    type: Boolean,
    default: function () {
      return false;
    }
  },
  current_exam: {
    type: Number,
    default: function () {
      return 0;
    }
  },
  questionnaire_used: [{
    type: Schema.Types.ObjectId,
    ref: 'Questionnaires'
  }],
  record: {
    type: Schema.Types.ObjectId,
    ref: 'Records'
  }
})

const testTakers = mongoose.model('Test Takers', testTakersSchema)

module.exports = { testTakersSchema, testTakers }
