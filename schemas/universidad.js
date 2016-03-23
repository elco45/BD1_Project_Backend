
var mongoose = require('mongoose');
var universidad = new mongoose.Schema({
	Id_universidad:Number,
	Nombre:String,
});

module.exports = mongoose.model('Tabla_universidad', universidad);

