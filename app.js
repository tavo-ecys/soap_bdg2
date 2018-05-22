require('dotenv').config();

const hapi = require('hapi');
// Plugin para rutas del servidor
const Routes = require('./routes/routes');

const server = new hapi.Server();
// process.env.NODE_ENV
// Registro de routes en el servidor
// server.register([Routes]);
const serverPort = process.env[`PORT_${process.env.NODE_ENV.toUpperCase()}`];
console.log(`PORT_${process.env.NODE_ENV.toUpperCase()}`);
console.log(serverPort);
server.connection({ port: serverPort });
// Defino ruta
server.route(Routes.rutas);

// Levanto server
server.start((err) => {
  if (err) throw err;
  console.log(`Servidor levantado en: ${server.info.uri}`);
});

module.exports = server;
