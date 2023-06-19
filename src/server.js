const routes = require('./routes');
const Hapi = require('@hapi/hapi');
const H2o2 = require('@hapi/h2o2');
require('dotenv').config();

const server = Hapi.server({
  host: 'localhost',
  port: process.env.PORT,
  routes: {
    cors: {
      origin: ['*'],
    },
  },
});

const startServer = async () => {
  try {
    //server.register(H2o2);

    server.route(routes);

    await server.start();
    console.log('Server running on:', server.info.uri);
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();

