var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var docente = new mongoose.Schema({
	Id_docente: Number,
	nombre: String,
	apellido:String,
	especialidad:String,
	Id_universidad:Number,
	password:String,
	email: {type: String, unique: true, required: true},
	cursos: [String]

});

docente.plugin(uniqueValidator);
module.exports = mongoose.model('Tabla_docente', docente);
