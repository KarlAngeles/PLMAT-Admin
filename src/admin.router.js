const AdminBro = require('admin-bro');
const    AdminExpress  = require('@admin-bro/express');
const express = require('express');
const { AdminUser } = require('../models/admin_users');
const bcrypt = require('bcrypt');

const buildAdminRouter = (admin) => {
const router = AdminExpress.buildAuthenticatedRouter(admin,{
  authenticate: async (email, password) => {
  const user = await AdminUser.findOne({ email })
  if (user) {
    const matched = await bcrypt.compare(password, user.encryptedPassword)
    if (matched) {
      return user
    }
  }
  return false
  },
  cookieName: "PLMAT Admin",
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})
  return router;
};

module.exports = buildAdminRouter;


// const AdminBro = require('admin-bro');
// const    AdminExpress  = require('@admin-bro/express');
// const express = require('express');
// const { AdminUser } = require('../models/admin_users');
// const bcrypt = require('bcrypt');

// const buildAdminRouter = (admin) => {
// const router = AdminExpress.buildAuthenticatedRouter(admin,{
//   authenticate: async (email, password) => {
//   const user = await AdminUser.findOne({ email })
//   if (user) {
//     const matched = await bcrypt.compare(password, user.encryptedPassword)
//     if (matched) {
//       return user
//     }
//   }
//   return false
//   },
//   cookieName: "PLMAT Admin",
//   cookiePassword: 'some-secret-password-used-to-secure-cookie',
// })
//   return router;
// };

// module.exports = buildAdminRouter;
