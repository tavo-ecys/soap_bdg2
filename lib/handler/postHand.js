const RP = require('request-promise');
/**
 *
 * @param {*} headers
 * @param {*} payload
 * @param {*} params
 * @param {*} objRedis
 * {
    "ip": "localhost",
    "port": "8000",
    "endpoint": "/{idService}",
    "method": "POST",
    "wsdl": "wsdl.com?wsdl"
}
 */
const requestToServer = (headers, payload, params, objRedis) => {
  payload.wsdl = objRedis.wsdl;
  const options = {
    method: objRedis.method,
    uri: `http://${objRedis.ip}:${objRedis.port}/${params.idService}`,
    headers,
    body: payload,
    json: true,
  };
  return RP(options);
};

module.exports = (request, reply) => {
  const parametro = request.payload;

  request.redis
    .hgetall(`endpoint${request.params.idService}:${process.env.NODE_ENV}`)
    .then(res => requestToServer(request.headers, request.payload, request.parametro, res))
    .then(res => reply(res))
    .catch(err => reply(err));
};
