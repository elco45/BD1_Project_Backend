var mongoose = require('mongoose');

var docente = new mongoose.Schema({
	Id_docente: Number,
	nombre: String,
	apellido:String,
	especialidad:String,
	Id_universidad:Number,
	password:String,
	email: String,
	cursos: [String]

});

module.exports = mongoose.model('Tabla_docente', docente);
