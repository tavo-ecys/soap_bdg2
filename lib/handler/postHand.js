const soap = require('soap-as-promised');

module.exports = (request, reply) => {
  soap
    .createClient(request.payload.wsdl)
    .then(client => client.TipoCambioFechaInicial({ fechainit: '2018-06-04' }))
    .then(result => reply(result))
    .then(error => reply(error))
    .catch(err => reply(err));
};
