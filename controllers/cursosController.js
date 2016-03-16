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
          nombre: request.payload.course.nombre,
          trimestre: request.payload.course.trimestre,
          year: request.payload.course.year,
          docente: request.payload.idTeacher,
          estudiantes:[],
          tareas: [],
          anuncios : [],
          comentarios: [],
          confirmacion_alum: []
      });
     newCurso.save();
     return reply(newCurso);
  }//fin handler
};//fin create user

exports.verAllCourse = {
  handler: function(request, reply) {
    var todoCursos = curso.findById({_id:request.payload.id});
    return reply(todoCursos);
  }//fin handler
}//fin verAllCourse
