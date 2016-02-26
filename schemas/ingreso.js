var mongoose = require('mongoose');
var ingreso = new mongoose.Schema({
  fecha : String,
  total: Number,
});
module.exports = mongoose.model('Ingresos', ingreso);
