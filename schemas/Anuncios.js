var mongoose = require('mongoose');

var Anuncio = new mongoose.Schema({
	Id_anuncio:String,
	descripción	:String,
	titulo:String
});

module.exports = mongoose.model('Tabla_anuncio', Anuncio);

