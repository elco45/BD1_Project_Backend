var producto = require('../schemas/producto');

exports.getProductos = {
  handler: function(request, reply){
    var productos = producto.find({});
    reply(productos);
  }
}

exports.createProducto = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var newProducto = new producto({
      id: request.payload.id,
      descripcion: request.payload.descripcion,
      fecha_ingreso: request.payload.fecha_ingreso,
      fecha_venc:request.payload.fecha_venc,
      precio:request.payload.precio,
      cantidad: request.payload.cantidad
    });
    newProducto.save();
    return reply('ok');
  }
}
exports.getProductoByAccount = {
  handler: function(request, reply){
    var productos = producto.find({id:request.payload.id});
    reply(productos);
  }
} 

