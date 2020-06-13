'use strict';

function timeStamp(req,res,next){
  let d = new Date();
  let dateTime = d.toLocaleDateString();
  req.requestTime = dateTime;
  next();
}

module.exports = timeStamp;

