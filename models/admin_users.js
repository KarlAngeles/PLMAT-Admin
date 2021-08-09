const mongoose = require('mongoose')
const { Schema } = mongoose

const adminUserSchema = new Schema( {
    email: { type: String, required: true },
    encryptedPassword: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Restricted'], required: true },
  })
const AdminUser = mongoose.model('Admin', adminUserSchema)

module.exports = { adminUserSchema, AdminUser }

//Pass all configuration settings to AdminBro

// const adminBro = new AdminBro({
//     resources: [{
//       resource: User,
//       options: {
//         properties: {
//           encryptedPassword: {
//             isVisible: false,
//           },
//           password: {
//             type: 'string',
//             isVisible: {
//               list: false, edit: true, filter: false, show: false,
//             },
//           },
//         },
//         actions: {
//           new: {
//             before: async (request) => {
//               if(request.payload.password) {
//                 request.payload = {
//                   ...request.payload,
//                   encryptedPassword: await bcrypt.hash(request.payload.password, 10),
//                   password: undefined,
//                 }
//               }
//               return request
//             },
//           }
//         }
//       }
//     }],
//     rootPath: '/admin',
//   })