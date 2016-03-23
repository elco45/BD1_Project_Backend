var mongoose = require('mongoose');

var solucion = new mongoose.Schema({
	nombreArchivo:String,
	Id_tarea:String,
	respuesta:String,
	nota: Number,
	Id_estudiante:Number,
});

module.exports = mongoose.model('Tabla_solucion', solucion);
