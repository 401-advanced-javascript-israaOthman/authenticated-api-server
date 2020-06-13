'use strict';

const express = require('express');

const router = express.Router();


const getModel = require('../../middleware/checkRout');

router.param('model', getModel);

const bearer = require('../auth/middleware/bearer-auth');
const acl = require('../auth/middleware/authorize');

//============Routs==========\\
router.get('/api/v1/:model',bearer, getHandler);
router.get('/api/v1/:model/:id',bearer, getOneHandler);
router.post('/api/v1/:model',bearer,acl('add'), postHandler);
router.put('/api/v1/:model/:id',bearer,acl('change'), putHandler);
router.delete('/api/v1/:model/:id',bearer,acl('remove'), deleteHandler);
router.patch('/api/v1/:model/:id',bearer,acl('change'), patchHandler);


//============Functions=========\\
function getHandler(req, res, next){
  req.model.read()
    .then(data =>{
      let output ={
        count : data.length ,
        result : data,
      };
      res.status(200).send(output);
    })
    .catch(next);
}

function getOneHandler(req, res, next){
  req.model.read(req.params.id)
    .then(data =>{
      res.status(200).send(data);
    })
    .catch(next);
}


function postHandler(req, res ,next) {
  req.model.create(req.body)
    .then(data =>{
      res.status(201).json(data); 
    })
    .catch(next);
    
}
  
function putHandler(req, res ,next) {
  req.model.update(req.params.id,req.body)
    .then(data =>{
      res.status(201).send(data); 
    })
    .catch(next);
}
  
function deleteHandler(req, res, next) {
  req.model.delete(req.params.id)
    .then(data =>{
      res.status(200).send(data);
    })
    .catch(next);
}

function patchHandler(req,res,next){
  req.model.update(req.params.id,req.body)
    .then(data =>{
      res.status(201).send(data); 
    })
    .catch(next);
}



module.exports = router;