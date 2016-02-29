
var mongoose = require('mongoose');

var tarea = new mongoose.Schema({
	id_tarea:Number,
	nota:Number,
	fecha_entrega:Date(),
	parcial:Number,
	solucion:String[]


});

module.exports = mongoose.model('Tabla_tarea', tarea);

