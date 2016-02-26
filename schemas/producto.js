var mongoose = require('mongoose');

var ProductoSchema = new mongoose.Schema({
	id : {type:String,unique: true,required: true},
  	descripcion : String,
 	fecha_ingreso: String,
 	fecha_venc: String,
 	precio: Number,
 	cantidad: Number,
});

module.exports = mongoose.model('lista_productos', ProductoSchema);
