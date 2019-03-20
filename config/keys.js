// key.js figure out what set of credential return

if(process.env.NODE_ENV === 'production'){
  // return the set of key
  module.exports = require('./prod');
}else {
  // we are in dev, return key
  module.exports = require('./dev');
}
