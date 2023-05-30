const express = require('express');
const router = express.Router();
const pool = require('../database');

const registeredUsers = [];

router.post('/', (req, res) => {
	const { nombre, apellido, telefono, correo, password} = req.body;
	registeredUsers.push({nombre, apellido, telefono, correo, password});
	console.log('Received data:', { nombre, apellido, telefono, correo, password });

	const responseValue = 1; // Or 0 based on your requirements

	async function insertarRegistro(datos) {
		const { nombre, apellido, telefono, correo, password} = datos;

		try {
			const existeCorreoClienteQuery = 'SELECT COUNT(*) FROM "schema"."Cliente" where "Email" = $1'
			const { rows: correoExistente } = await pool.query(existeCorreoClienteQuery, [correo]);

			if (parseInt(correoExistente[0].count) > 0){
				console.log('El correo ya esta registrado');
				return;
			}

			const insertQuery = 'INSERT INTO "schema"."Cliente" ("Name", "Email", "Password", "surname", "Telefono") VALUES ($1, $2, $3,$4, $5)'
			await pool.query(insertQuery, [nombre, correo, password, apellido, telefono]);
			console.log('Registro insertado correctamente');
			//res.status(200).json({ response: responseValue });
		} catch (error) {
			console.error('Error al insertar el registro: ', error);
		}
	}

	insertarRegistro(registeredUsers);

});

module.exports = router;