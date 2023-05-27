console.log('Proyecto');
const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3003;

app.use(express.json());
routerApi(app);

app.listen(port, () =>
{
	console.log('mi port: ' + port)
});