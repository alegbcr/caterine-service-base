const express = require('express');

function routerApi(app) {
  const router = express.Router();

  
  app.use('/api', router);
  router.get('/', (req, res) => {
    res.send('hello world');
  });
}

module.exports = routerApi;
