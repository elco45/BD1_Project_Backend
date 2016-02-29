var mongoose = require('mongoose');

var Comentario = new mongoose.Schema({
	Id_comentario: Number,
	descripción: String,
	Id_comentario_padre:Number,
	Id_estudiante:String,
	Id_docente:String

});

module.exports = mongoose.model('Tabla_comentario', Comentario);

