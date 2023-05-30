const express = require('express');
const router = express.Router();
const pool = require('../database');


async function insertarRegistro(datos) {
	const { nombre, apellido, telefono, correo, password} = datos;
	console.log('Received data (async):', { nombre, apellido, telefono, correo, password });
	try {
		const existeCorreoClienteQuery = 'SELECT COUNT(*) FROM "schema"."Cliente" where "Email" = $1'
		const { rows: correoExistente } = await pool.query(existeCorreoClienteQuery, [correo]);

		if (parseInt(correoExistente[0].count) > 0){
			console.log('El correo ya esta registrado');
			return;
		}
		await pool.query('ALTER TABLE "schema"."Cliente" DISABLE TRIGGER ALL;');

		const insertQuery = 'INSERT INTO "schema"."Cliente" ("Name", "Email", "Password", "surname", "Telefono") VALUES ($1, $2, $3,$4, $5)'
		await pool.query(insertQuery, [nombre, correo, password, apellido, telefono]);
		console.log('Registro insertado correctamente');

		await pool.query('ALTER TABLE "schema"."Cliente" ENABLE TRIGGER ALL;');
		//res.status(200).json({ response: responseValue });
	} catch (error) {
		console.error('Error al insertar el registro: ', error);
	}
}
router.post('/', (req, res) => {
	const { nombre, apellido, telefono, correo, password} = req.body;
	console.log('Received data:', { nombre, apellido, telefono, correo, password });

	const responseValue = 1; // Or 0 based on your requirements

	insertarRegistro({ nombre, apellido, telefono, correo, password});

});

module.exports = router;