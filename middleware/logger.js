'use strict';

function logger(req,res,next){
  let path = req.path;
  let method = req.method;
  let requestTime = req.requestTime;

  console.log(`path -> ${path} method -> ${method} requestTime -> ${requestTime} `);
  next();
}

module.exports = logger;