require('dotenv').config();

const hapi = require('hapi');
const hapiIoredis = require('hapi-ioredis');
// Plugin para rutas del servidor
const Routes = require('./routes/routes');

// Plugins
const hapiPlugins = [
  {
    register: hapiIoredis,
    options: {
      url: 'redis://127.0.0.1:6379',
    },
  },
];

const server = new hapi.Server();
// Registro de routes en el servidor
const serverPort = process.env[`PORT_${process.env.NODE_ENV.toUpperCase()}`];

server.connection({ port: serverPort });
// Defino ruta
server.route(Routes.rutas);
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
