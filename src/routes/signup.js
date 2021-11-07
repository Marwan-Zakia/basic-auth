'use strict';
 const express = require('express');
 const  {userModel}  = require('../models/index');
const userRouter = express.Router();
userRouter.use(express.json());
const bcrypt = require('bcrypt');
const base64 = require('base-64');
userRouter.use(express.urlencoded({ extended: true }));
userRouter.post('/signup', async (req, res) => {
      try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const record = await userModel.create(req.body);
        console.log(record);
        res.status(200).json(record);
      } catch (e) { res.status(403).send("Error Creating User"); }
    }); 
    
module.exports = userRouter