const soap = require('soap-as-promised');
const Protocol = require('../models/Transaction');
const _ = require('lodash');

/**
 *
 * @param {trasnacción mongo conultada} arrAtributos
 * @param {objeto JSON con la info buscar} var1
 */
const construirObjeto = (arrAtributos, var1) => {
  const objSalida = {};
  for (const atributo of arrAtributos) {
    const ruta = atributo.path ? `${atributo.path}.${atributo.nameIn}` : atributo.nameIn;
    const objEncontrado = _.get(var1, ruta, null);
    if (objEncontrado) {
      objSalida[atributo.nameOut] = objEncontrado;
    }
  }
  return objSalida;
};

module.exports = (request, reply) => {
  Protocol.findOne({ idTransaction: request.params.idService }, (err, protocol) => {
    if (err) {
      return reply(err);
    } else if (!protocol) {
      return reply({
        error: 406,
        msj: 'Monto trans no existe',
      });
    }

    const args = construirObjeto(protocol.attributesIn, request.payload);
    soap
      .createClient(request.payload.wsdl)
      .then(client => client[protocol.name](args))
      .then((result) => {
        const respuesta = construirObjeto(protocol.attributesOut, result);
        reply(respuesta);
      })
      .catch(error => reply(error));
  });
};
