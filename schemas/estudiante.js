var mongoose = require('mongoose');

var estudiante = new mongoose.Schema({
	Id_estudiante: Number,
	nombre:String,
	apellido:String,
	Id_universidad:Number,
	password:String,
	email: String

});

module.exports = mongoose.model('Tabla_estudiante', estudiante);
