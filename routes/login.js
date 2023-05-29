const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', (req, res) =>
{
	res.json({"users": ["usuario", "usuario", "usuario"]});
});

module.exports =  router;