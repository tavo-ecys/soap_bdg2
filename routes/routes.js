const Handlers = require('../lib/handler');

module.exports = {
  rutas: [
    {
      method: 'GET',
      path: '/',
      config: {
        handler: Handlers.indexHand,
      },
    },
    {
      method: 'POST',
      path: '/{idService}',
      config: {
        handler: Handlers.postHand,
      },
    },
  ],
};
