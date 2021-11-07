'use strict';
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const {auth}=require('../middleware/auth');
const userRouter = express.Router();
userRouter.use(express.json());

userRouter.use(express.urlencoded({ extended: true }));




module.exports = userRouter.post('/signin',auth, async (req, res) => {
    res.status(200).json(req.user)

    });

