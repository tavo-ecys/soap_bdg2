module.exports = (request, reply) => {
  const parametro = request.payload;
  return reply({ parametro });
};
