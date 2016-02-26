var producto = require('../schemas/producto');
var user = require('../schemas/user')
var ingresosTabla = require('../schemas/ingreso')

exports.getProductos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var productos = producto.find({});
    reply(productos);
  }
}

exports.getUsers = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var users=user.find({});
    reply(users);
  }
}

exports.postProductos = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var v= "",ing="";
    for (var i = 0; i < 10; i++) {
       v += request.payload.fecha_venc[i];
       ing += request.payload.fecha_ingreso[i];
    }
    request.payload.fecha_venc = v;
    request.payload.fecha_ingreso =ing;
    var newProducto = new producto({
      id: request.payload.id,
      descripcion: request.payload.descripcion,
      fecha_ingreso: request.payload.fecha_ingreso,
      fecha_venc: request.payload.fecha_venc,
      precio: request.payload.precio,
      cantidad: request.payload.cantidad
    });
    newProducto.save();
    return reply('ok');
  }
}

exports.putProductos ={
  auth: {
    mode:'required',
    strategy:'session',
    scope:['admin']
  },
  handler: function(request, reply){
    var v= "",ing="";
    for (var i = 0; i < 10; i++) {
      v += request.payload.fecha_venc[i];
      ing += request.payload.fecha_ingreso[i];
    }
    request.payload.fecha_venc = v;
    request.payload.fecha_ingreso =ing;
    producto.findOneAndUpdate(
      {id:request.payload.id},
        {descripcion: request.payload.descripcion,
        fecha_ingreso: request.payload.fecha_ingreso,
        fecha_venc: request.payload.fecha_venc,
        precio: request.payload.precio,
        cantidad:request.payload.cantidad
      },
      function(err,productos){
        productos.save(function(err){
          if (err) {
            alert("ERROR");
          }
        });
      }
    );
  }
}

exports.delProductos={
   auth: {
    mode:'required',
    strategy:'session',
    scope:['admin']
  },
   handler: function(request, reply){
    producto.findOneAndRemove({ id:request.params.id }, function(err) {
      if (err) {
        throw err;
      } 
      return reply('ok')
    });
  }
}

exports.delUsers={
   auth: {
    mode:'required',
    strategy:'session',
    scope:['admin']
  },
  handler: function(request, reply){
    user.findOneAndRemove({ username:request.params.username }, function(err) {
      if (err) {
        throw err;
      }
    });
    return reply('ok');
  }
}

exports.getIngreso = {
  auth: {
    mode:'required',
    strategy:'session',
    scope: ['admin']
  },
  handler: function(request, reply){
    var ingresos = ingresosTabla.find({});
    reply(ingresos);
  }
}
