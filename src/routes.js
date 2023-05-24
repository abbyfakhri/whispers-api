const {
    postMessage,
    getMessage,
  } = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/message',
      handler: postMessage,
    },

    {
      method: 'GET',
      path: '/message',
      handler: getMessage
    },

  ];
  
  module.exports = routes;
  