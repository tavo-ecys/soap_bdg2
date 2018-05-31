require('dotenv').config();

const hapi = require('hapi');
// Plugin para rutas del servidor
const Routes = require('./routes/routes');

// Plugins
const hapiPlugins = [];

const server = new hapi.Server();
// Registro de routes en el servidor
const serverPort = process.env[`PORT_${process.env.NODE_ENV.toUpperCase()}`];

server.connection({ port: serverPort });
// Defino ruta
server.route(Routes.rutas);
server.ext('onPreResponse', (request, reply) => {
  if (request.response != null && request.response.header != null) {
    request.response.header('Access-Control-Allow-Origin', '*');
    request.response.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    request.response.header('Access-Control-Allow-Methods', 'GET, POST');
  }
  reply.continue();
});
// Registrar plugins de hapi
server.register(hapiPlugins, (err) => {
  if (err) throw err;
  // Levanto server
  server.start((error) => {
    if (error) throw error;
    console.log(`Servidor levantado en: ${server.info.uri}`);
  });
});

module.exports = server;
