const express = require('express');
const router = express.Router();

const registeredUsers = [];

router.get('/', (req, res) => {
	const { nombre, appellido, telefono, correo} = req.query;
	registeredUsers.push({nombre, appellido, telefono, correo});
	res.json({registeredUsers});
	res.status(200).json({ message:'Registration succesful'});
});

module.exports = router;