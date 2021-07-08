const mongoose = require('mongoose')
const { Schema } = mongoose

const questionnaireSchema = new Schema({
  subject: String,
  questions: [{
    type: Schema.Types.ObjectId,
    ref: 'Questions'
  }],
  report: {
    type: Schema.Types.ObjectId,
    ref: 'Reports'
  },
  answer_list: [String],
  total_time: Number,
  total_questions: Number,
  date_created: { type: Date, default: Date.now }
})

const Questionnaires = mongoose.model('Questionnaires', questionnaireSchema)

module.exports = { questionnaireSchema, Questionnaires }
