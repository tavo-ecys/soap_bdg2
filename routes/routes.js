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
      path: '/',
      config: {
        handler: Handlers.postHand,
      },
    },
  ],
};
