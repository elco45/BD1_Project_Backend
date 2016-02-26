var producto = require('../schemas/producto');
var ingreso =require('../schemas/ingreso');
exports.GetProductoById = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['vendedor',"admin"]
  },
  handler: function(request, reply){
    var productos = producto.find({id:request.payload.id});
    reply(productos);
  }
} 

exports.PutProductos ={
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['vendedor','admin']
  },
  handler: function(request, reply){
    producto.findOneAndUpdate({id:request.payload.id},{cantidad:request.payload.cantidadmax-request.payload.cantidad},function(err,productos){
      productos.save(function(err){
        if (err) {
          alert("YES");
        }
      });
    });
  }
}

exports.addIngreso={
   auth: {
    mode:'required',
    strategy:'session',
    scope:['vendedor','admin']
  },
  handler: function(request, reply){
    var fecha_actual = new  Date();
    var f2=fecha_actual.getFullYear()+"-"+(fecha_actual.getMonth()+1)+"-"+fecha_actual.getDate();
    var newingreso = new ingreso({
      fecha: f2,
      total: request.payload
    });
    newingreso.save();
    return reply('ok');
  }
}



