var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var estudiante = new mongoose.Schema({
	Id_estudiante: Number,
	nombre:String,
	apellido:String,
	Id_universidad:Number,
	password:String,
	email: {type: String, unique: true, required: true},
	cursos: [String]

});

estudiante.plugin(uniqueValidator);
module.exports = mongoose.model('Tabla_estudiante', estudiante);
