const express = require('express');
const routerApi = require('./api');

const app = express();
const port = 3000;

app.use(express.json);

// routing
routerApi(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
