module.exports = (request, reply) => {
  console.log('Entra:', request.payload);
  reply(request.payload);
};
