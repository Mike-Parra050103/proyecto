const express = require('express');
const router = express.Router();

const registeredUsers = [];

router.post('/', (req, res) => {
	const { nombre, apellido, telefono, correo} = req.body;
	registeredUsers.push({nombre, apellido, telefono, correo});
	console.log('Received data:', { nombre, apellido, telefono, correo });

	const responseValue = 1; // Or 0 based on your requirements

	res.status(200).json({ response: responseValue });
});

module.exports = router;