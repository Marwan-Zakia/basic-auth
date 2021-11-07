// 'use strict';
// const express = require('express');
// const  {userModel}  = require('../models/index');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
// const userRouter = express.Router();
// userRouter.use(express.json());
// userRouter.use(express.urlencoded({ extended: true }));

// userRouter.post('/signin', signin); 

// async function signin(req, res) {
//     let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
//     let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
//     let decodedString = base64.decode(encodedString); // "username:password"
//     let [username, password] = decodedString.split(':'); // username, password
//     try {
//       const user = await userModel.findOne({ where: { username: username } });
//       const valid = await bcrypt.compare(password, user.password);
//       if (valid) {
//         res.status(200).json(user);
//       }
//       else {
//         throw new Error('Invalid User')
//       }
//     } catch (error) { res.status(403).send("Invalid Login"); }
  
// }
  
// module.exports = userRouter
