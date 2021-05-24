const mongoose = require('mongoose')
const { Schema } = mongoose

const reportSchema = new Schema({
  questionnaire_id: Schema.Types.ObjectId,
  benchmark: Number, 
  algorithm_used: String,
  seconds_for_easy: Number,
  seconds_for_medium: Number,
  seconds_for_hard: Number,
  number_of_easy: Number,
  number_of_medium: Number,
  number_of_hard: Number ,
  date_created: Date
})

const Reports = mongoose.model('reports', reportSchema)

module.exports = { reportSchema, Reports }
