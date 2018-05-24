module.exports = (request, reply) => {
  // Paso 1 obtener client redis
  const redisClient = request.redis;

  // Paso 2 ejecutar comando promesas
  redisClient
    .get('key1')
    .then(res => reply(res))
    .catch(err => reply(err));
};
