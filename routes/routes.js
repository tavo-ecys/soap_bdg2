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
    {
      method: 'POST',
      path: '/test',
      config: {
        handler: Handlers.testHand,
      },
    },
    {
      method: 'POST',
      path: '/install',
      config: {
        handler: Handlers.testHand,
      },
    },
  ],
};
