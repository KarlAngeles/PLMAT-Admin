const mongoose = require('mongoose')
const { Schema } = mongoose

const questionnaireSchema = new Schema({
  questions: [],
  total_time: Number,
  total_questions: Number,
})

const Questionnaires = mongoose.model('questionnaires', questionnaireSchema)

module.exports = { questionnaireSchema, Questionnaires }
