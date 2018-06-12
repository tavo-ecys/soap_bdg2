const Protocol = require('../models/Transaction');

const objModule = {};

const findProtocol = protocol =>
  new Promise((resolve, reject) => {
    Protocol.findOneAndUpdate(
      { idTransaction: protocol.idTransaction },
      protocol,
      (error, resp) => {
        // Valida error
        if (error) {
          const objError = {
            error: 406,
            msj: 'Protocolo no encontrado.',
          };
          return reject(objError);
        }
        // Si todo esta bien devolver mensaje exitoso
        return resolve({
          error: 200,
          msj: 'Protocolo encontrado.',
          data: resp,
        });
      },
    );
  });

const addProtocol = (objResponse, payload) =>
  new Promise((resolve, reject) => {
    // Agregar protocolo nuevo
    if (!objResponse.data) {
      const newProtocol = new Protocol(payload);
      newProtocol.save((error, protocol) => {
        if (error) {
          const objError = {
            error: 406,
            msj: 'Protocolo no agregado.',
          };
          return reject(objError);
        }
        const resp = objResponse;
        resp.data = protocol;
        return resolve(resp);
      });
    }
    return resolve(objResponse);
  });

objModule.installProtocol = (request, reply) => {
  findProtocol(request.payload)
    .then(res => addProtocol(res, request.payload))
    .then(res2 => reply(res2))
    .catch(err => reply(err));
};

module.exports = objModule;
