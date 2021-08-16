const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const uploadFeature = require('@admin-bro/upload');
const bcrypt = require('bcrypt');

AdminBro.registerAdapter(AdminBroMongoose);

const { Questions } = require('../models/questions')
const { testTakers } = require('../models/test_takers')
const { Questionnaires } = require('../models/questionnaires') 
const { Reports } = require('../models/reports')
const { Records } = require('../models/records')
const { Settings } = require('../models/settings')
const { Results } = require('../models/results')
const { AdminUser } = require('../models/admin_users')


const canEdit = ({ currentAdmin, record }) => {
  return currentAdmin && (
    currentAdmin.role === 'Admin'
    || currentAdmin._id === record.param('ownerId')
  )
}

const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'Admin'

const options = {
  rootPath: '/admin',
  resources: [
    testTakers,
    { resource: Records, options: {
      actions: { new: { isAccessible: false } },
    }},
    { resource: Questions, options: {
      listProperties: [
        '_id', 
        'subject', 
        'difficulty',
        'text', 
        'choices', 
        'correct_answer',
        'date_created'
      ],
    },
      features: [uploadFeature({
        provider: { aws: { 
          region: 'ap-southeast-1',
          bucket: 'plmat-bucket',
          accessKeyId: 'AKIARRR4CVZ7O6Z4MWXM',
          secretAccessKey: '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',
          expires: 0  
        }},
        properties: {
          key: 'fileUrl',
          mimeType: 'image/png'
        },
      })]
    },
    { resource: Questionnaires, options: {
      actions: { new: { isAccessible: false } },
    }},
    { resource: Reports, options: {
      properties: { 
        _id: { 
          isTitle: true,
        },
      },
      listProperties: [
        '_id', 
        'benchmark', 
        'algorithm', 
        'total_questions', 
        'questionnaire_quantity',
        'date_created'
      ],
      actions: { new: { isAccessible: false } }
    }},
    { resource: Results, options: {
      actions: {
      new: { isAccessible: false },
      edit: { isAccessible: canModifyUsers },
      delete: { isAccessible: canModifyUsers }, }
    }},
    { resource: Settings, options: {
      actions: { new: { isaAccessible: false }, delete: { isAccessible: false } }
    }},
    { resource: AdminUser,
      options: {  
        properties: {
          encryptedPassword: {
            isVisible: false,
          },
          password: {
            type: 'string',
            isVisible: {
              list: false, edit: true, filter: false, show: false,
            },
          },
        },
        actions: {
          new: {
            before: async (request) => {
              if(request.payload.password) {
                request.payload = {
                  ...request.payload,
                  encryptedPassword: await bcrypt.hash(request.payload.password, 10),
                  password: undefined,
                }
              }
              return request
            },
          },
          edit: { isAccessible: canModifyUsers },
          delete: { isAccessible: canModifyUsers },
          new: { isAccessible: canModifyUsers },
        }
      }
    },    
  ],
  pages: {
    Generator: {
      label: "Generate Questionnaires",
      component: AdminBro.bundle('./components/Generator.jsx')
    },
    Checking: {
      label: "Check Passers",
      component: AdminBro.bundle('./components/Check_Passers.jsx')
    },
    Printing: {
      label: "In-Person Exam",
      component: AdminBro.bundle('./components/In-Person_Exam.jsx')
    },
  },
  dashboard: {
    component: AdminBro.bundle('./components/Dashboard')
    
  },
  branding: {
    companyName: 'PLMAT Admin',
    logo: 'https://plm.edu.ph/images/Seal/PLM_Seal_BOR-approved_2014.png',
    favicon: 'https://plm.edu.ph/favicon.ico',
    softwareBrothers: false
  }
};

module.exports = options;
