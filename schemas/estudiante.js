var mongoose = require('mongoose');

var estudiante = new mongoose.Schema({
	Id_estudiante: String,
	nombre:String,
	apellido:String,
	Id_universidad:Number,
	password:String

});

module.exports = mongoose.model('Tabla_estudiante', estudiante);



