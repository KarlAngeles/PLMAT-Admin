const mongoose = require('mongoose')
const { Schema } = mongoose

const settingSchema = new Schema({
  minutes_for_easy: Number,
  minutes_for_medium: Number,
  minutes_for_hard: Number,
})

const Settings = mongoose.model('Settings' , settingSchema)

module.exports = { settingSchema, Settings }
