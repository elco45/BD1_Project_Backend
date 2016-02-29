var mongoose = require('mongoose');

var docente = new mongoose.Schema({
	Id_decente: String,
	nombre: String,
	apellido:String,
	especialidad:String,
	Id_universidad:Number,
	password:String
});

module.exports = mongoose.model('Tabla_docente', docente);




