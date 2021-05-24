const mongoose = require('mongoose')
const { Schema } = mongoose

const questionSchema = new Schema({
  text: String,
  choices: [String],
  correct_answer: String,
  subject: String,
  difficulty: String,
  date_created: { type: Date, default: Date.now },
})

const Questions = mongoose.model('questions', questionSchema)

module.exports = { questionSchema, Questions }
