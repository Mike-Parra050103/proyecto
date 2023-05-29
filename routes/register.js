const express = require('express');
const router = express.Router();

router.get('/register', (req, res) =>
{
	res.send('Hola al register');
});

module.exports = router;