
var mongoose = require('mongoose');

var solucion = new mongoose.Schema({
	respuesta:String,
	Id_estudiante:Number,
});

module.exports = mongoose.model('Tabla_solucion', solucion);

