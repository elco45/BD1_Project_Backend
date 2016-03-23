var mongoose = require('mongoose');

var tarea = new mongoose.Schema({
	archivo: String,
	nombre: String,
	fecha_entrega:String,
	parcial:Number,
	solucion:[String]


});

module.exports = mongoose.model('Tabla_tarea', tarea);
