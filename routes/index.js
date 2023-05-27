const express = require('express');
const login = require('./login');
const register = require('./register');
const map = require('./map');
const mapAdmin = require('./mapAdmin');
const mapAdminHub = require('./mapAdminHub');

function routerApi(app)
{
	const router = express.Router();
	app.use('/api/v1', router);
	router.use('/login', login);
	router.use('/register', register);
	router.use('/map', map);
	router.use('/mapAdmin', mapAdmin);
	router.use('/mapAdminHub', mapAdminHub);
}

module.exports = routerApi;
