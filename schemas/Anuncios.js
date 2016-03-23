var mongoose = require('mongoose');

var Anuncio = new mongoose.Schema({
	Id_curso:String,
	descripcion	:String,
	titulo:String
});

module.exports = mongoose.model('Tabla_anuncio', Anuncio);

