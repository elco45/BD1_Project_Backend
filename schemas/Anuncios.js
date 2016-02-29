var mongoose = require('mongoose');

var Anuncio = new mongoose.Schema({
	Id_anuncio:Number,
	descripción	:String,
	titulo:String
});

module.exports = mongoose.model('Tabla_anuncio', Anuncio);

