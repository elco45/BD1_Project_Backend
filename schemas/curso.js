var mongoose = require('mongoose');

var curso = new mongoose.Schema({
	nombre: String,
	trimestre: Number,
	año: Date(),
	estudiantes:String[],
	docente:String,
	tareas:String[],
	anuncios:String[],
	comentarios:String[],
	confirmacion_alum:String[]

});

module.exports = mongoose.model('Tabla_curso', curso);

