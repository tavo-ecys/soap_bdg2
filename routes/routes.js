const Handlers = require('../lib/handler');

module.exports = {
  rutas: [
    {
      method: 'GET',
      path: '/{idService}',
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
