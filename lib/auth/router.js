'use strict';

const express = require('express');
const router = express.Router();
const users = require('./models/users/users-model');
const basic = require('./middleware/basic');

router.post('/signup',signupHandler);
router.post('/signin', basic , signinHandler);




async function signupHandler (req,res){
  try{
    const user = await users.save(req.body);
    const token = users.generateToken(user);
    res.cookie('token', token, {
      httpOnly : false,
    });
    res.json({token});
  }
  catch(err){
    res.status(403).send(err.message);
  }
}

function signinHandler(req,res){
  res.cookie('token', req.token, {
    httpOnly : false,
  });
  res.status(200).json({token:req.token , user: req.user});
}



module.exports = router;

