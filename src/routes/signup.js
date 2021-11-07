'use strict';
 const express = require('express');
const  {userModel}  = require('../models/index');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const userRouter = express.Router();
userRouter.use(express.json());
// userRouter.post('/signup', signup); 
userRouter.use(express.urlencoded({ extended: true }));

userRouter.post('/signup', async (req, res) => {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await userModel.create(req.body);
        console.log(record);
        res.status(200).json(record);
      } catch (e) { res.status(403).send("Error Creating User"); }
    }); 
    userRouter.post('/signin', async (req, res) => {
      let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
      let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
      let decodedString = base64.decode(encodedString); // "username:password"
      let [username, password] = decodedString.split(':'); // username, password
      try {
        const user = await userModel.findOne({ where: { username: username } });
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
          res.status(200).json(user);
        }
        else {
          throw new Error('Invalid User')
        }
      } catch (error) { res.status(403).send("Invalid Login"); }
    
    });


// async function signup(req, res) {
//     try {
//         req.body.password = await bcrypt.hash(req.body.password, 10);
//         const record = await userModel.create(req.body);
//         console.log(record);
//         res.status(200).json(record);
//             } catch (e) {
//        }
//     //    res.status(403).send("Error Creating User"); }
// }

  
module.exports = userRouter