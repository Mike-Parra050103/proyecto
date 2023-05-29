const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
{
	res.json({"mapas": ["mapa", "usuario", "usuario"]});
});

module.exports = router;