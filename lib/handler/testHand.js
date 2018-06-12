const soap = require('soap');

module.exports = (request, reply) => {
  console.log('TEST', request.payload);
  const url = request.payload.wsdl;
  const args = request.payload;
  soap.createClient(url, (err1, client) => {
    if (err1) {
      return reply(err1);
    }
    return client[request.payload.nameMethod](args, (err2, result) => {
      if (err2) {
        return reply(err2);
      }
      return reply(result);
    });
  });
};
