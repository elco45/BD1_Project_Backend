var mongoose = require('mongoose');

var curso = new mongoose.Schema({
	nombre: String,
	trimestre: String,
	year: String,
	docente:String,
	estudiantes:[String],
	tareas:[String],
	anuncios:[String],
	comentarios:[String],
	confirmacion_alum:[String]

});

module.exports = mongoose.model('Tabla_curso', curso);

