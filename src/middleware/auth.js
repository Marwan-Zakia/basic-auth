'use strict';

const express = require('express');
const  {userModel}  = require('../models/index');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const userRouter = express.Router();
userRouter.use(express.urlencoded({ extended: true }));
 const auth  =(async(req, res) => {
 let basicHeaderParts = req.headers.authorization.split(' ');  
      let encodedString = basicHeaderParts.pop();  
      let decodedString = base64.decode(encodedString); 
      let [username, password] = decodedString.split(':'); 
      try {
        const user = await userModel.findOne({ where: { username: username } });
        const valid = await bcrypt.compare(password, user.password);
        if (valid) {
          res.status(200).json(user);
          console.log(user)
        }
        else {
          throw new Error('Invalid User')
        }
 } catch (error) { res.status(403).send("Invalid Login"); }
 
 
})

module.exports ={auth}