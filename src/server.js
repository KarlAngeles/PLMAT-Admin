const express = require('express')
const AdminBro = require('admin-bro')
const mongoose = require('mongoose')
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

require('dotenv').config()

const app = express()
const uri = `mongodb+srv://dbUser:${process.env.DB_PW}@plmat.q0glb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const run = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const admin = new AdminBro(options)
  const router = buildAdminRouter(admin)
  app.use(admin.options.rootPath, router)
  app.listen(3004, () => console.log('AdminBro is under localhost:3004/admin'))
}

module.exports = run
