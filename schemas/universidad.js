var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var universidad = new mongoose.Schema({
	Id_universidad:Number,
	Nombre:{type: String, unique: true, required: true}
});

universidad.plugin(uniqueValidator);
module.exports = mongoose.model('Tabla_universidad', universidad);

