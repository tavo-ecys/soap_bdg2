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

// Ciclo de vida de petición ---------------------------

server.ext('onPreHandler', (request, reply) => {
  request.redis
    .sismember(`${'lista'}:${process.env.NODE_ENV}`, request.params.idService)
    .then((res) => {
      const valor = res === 1;
      if (valor) {
        return reply.continue();
      }
      return reply({ data: 'Servicio no existe' });
    })
    .catch(err => reply(err));
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
