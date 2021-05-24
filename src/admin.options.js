const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const { Questions } = require('../models/questions')
const { testTakers } = require('../models/test_takers')
const { Questionnaires } = require('../models/questionnaires') 
const { Reports } = require('../models/reports')

const options = {
  rootPath: '/admin',
  resources: [
    testTakers,
    Questions,
    { resource: Questionnaires, options: {
      actions: { new: { isAccessible: false } }
    }},
    { resource: Reports, options: {
      actions: { new: { isAccessible: false } }
    }},
  ],
  pages: {
    Generator: {
      label: "Generate Questionnaires",
      component: AdminBro.bundle('./components/Generator.jsx')
    }
  },
  dashboard: {
    component: AdminBro.bundle('./components/Dashboard')
  }
};

module.exports = options;
