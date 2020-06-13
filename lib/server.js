'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const apiRouter = require('./routs/api-v1');
const signRoutes = require('./auth/router');
const app = express();

//========Global Middlewere============\\
//    express middleware 
app.use(express.json());
//    3rd party middleware
app.use(cors());
app.use(morgan('dev'));


//========Routs============\\
app.get('/',(req,res)=>{
  res.send('Working ... :p');
});

app.use(apiRouter);
app.use(signRoutes);



//========Middlewere============\\

const notFound = require('../middleware/404');
const serverError = require('../middleware/500');



app.use('*', notFound); 
app.use(serverError); 


module.exports = {
  server : app, 
  start : (port) =>{
    const PORT = port || process.env.PORT || 3030;
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
  },
};