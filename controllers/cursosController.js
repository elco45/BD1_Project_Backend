var docente = require('../schemas/docente');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var estudiante = require('../schemas/estudiante');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var control_id = require('../schemas/control_id');
var university = require('../schemas/universidad');
var curso = require('../schemas/curso');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');

exports.crearCursos = {
  handler: function(request, reply) {

      var newCurso = new curso({
          nombre: request.payload.nombre,
          trimestre: request.payload.trimestre,
          year: request.payload.year,
          docente: 'admin'
      });
     newCurso.save();
     return reply('ok');
  }//fin handler

};//fin create user