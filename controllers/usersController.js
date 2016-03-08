var docente = require('../schemas/docente');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var estudiante = require('../schemas/estudiante');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var control_id = require('../schemas/control_id');
var university = require('../schemas/universidad');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.createUser = {
  handler: function(request, reply) {
    if(request.payload.user.especialidad){//docente

       var newDocente = new docente({
         Id_docente: request.payload.control_id.Id_docente + 1,
         nombre: request.payload.user.nombre,
         apellido: request.payload.user.apellido,
         especialidad: request.payload.user.especialidad,
         Id_universidad: request.payload.control_id.Id_universidad+1,
         password: request.payload.user.password,
         email: request.payload.user.email,
         cursos:[]
       });
       newDocente.save(function (err) {
         if(err){
           return reply(err);
         }else{
           control_id.findById('56d7308a3e79d4780263b696',function(err,ctrl){
              ctrl.Id_docente = request.payload.control_id.Id_docente + 1;
              ctrl.save(function(err){
                if(err) throw err;
              })
            })
         }//fin else
       });
       return reply('ok');
      //fin if
    }else{
      var newEstudiante = new estudiante({
        Id_estudiante:request.payload.control_id.Id_estudiante + 1,
        nombre: request.payload.user.nombre,
        apellido: request.payload.user.apellido,
        Id_universidad: request.payload.control_id.Id_universidad+1,
        password: request.payload.user.password,
        email: request.payload.user.email,
        cursos:[]

      });
      newEstudiante.save(function (err) {
        if(err){
          return reply(err);
        }else{
          control_id.findById('56d7308a3e79d4780263b696',function(err,ctrl){
             ctrl.Id_estudiante= request.payload.control_id.Id_estudiante + 1;
             ctrl.save(function(err){
               if(err) throw err;
             })
           })
        }//fin else
      });
      return reply('ok');

    }//fin else
  }//fin handler
};//fin create user

exports.getCtrl = {
  handler: function(request, reply){
    control_id.findOne({_id:'56d7308a3e79d4780263b696'},function(err,control){
        reply(control);
    })
  }
}

exports.getUniversity = {
  handler: function(request, reply){
    university.findOne({Nombre:request.payload.nombre},function(err,control){
        reply(control);
    })
  }
}

exports.createUniversity={
  handler: function(request, reply){
     newUniversidad = new university({
        Id_universidad:request.payload.control_id.Id_universidad+1,
        Nombre: request.payload.nombre
      });
      newUniversidad.save(function(err){
        if (err) {
          return reply(err);
        }else{
          control_id.findById('56d7308a3e79d4780263b696',function(err,ctrl){
            ctrl.Id_universidad = request.payload.control_id.Id_universidad + 1;
            ctrl.save(function(err){
              if(err) throw err;
            })
          })
        }
      })
  }
}

exports.getUniversidades={
  handler:function(request,reply){
    var universidades = university.find({});
    console.log(universidades)
    reply(universidades);
  }
}





/*  var newUser = new user({
username : request.payload.username,
password : SHA3(request.payload.password),
ID: request.payload.ID,
nombre: request.payload.nombre,
scope: request.payload.scope
});
newUser.save(function (err) {
if(err){
return reply(boom.notAcceptable('Username must be unique: ' + err));
}else{
return reply('ok');
};
});*/
