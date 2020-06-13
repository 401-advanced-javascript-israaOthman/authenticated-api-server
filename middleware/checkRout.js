
function getModel(req, res, next) {
  let model = req.params.model;
  let md = require(`../lib/models/${model}/${model}`);
  
  switch(model) {
  case 'categories':
  case 'products':
    req.model = md;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}

module.exports = getModel;