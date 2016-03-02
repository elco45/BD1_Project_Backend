var mongoose = require('mongoose');

var Control_id = new mongoose.Schema({
	Id_universidad: Number ,
	Id_estudiante: Number,
	Id_docente: Number
});

module.exports = mongoose.model('control_id', Control_id);
