module.exports = (request, reply) => {
  const parametro = request.payload;

  request.redis
    .hgetall(`endpoint${request.params.idService}:${process.env.NODE_ENV}`)
    .then(res => reply(res))
    .catch(err => reply(err));
};
