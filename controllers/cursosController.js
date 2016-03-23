var docente = require('../schemas/docente');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var estudiante = require('../schemas/estudiante');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var control_id = require('../schemas/control_id');
var university = require('../schemas/universidad');
var comments = require('../schemas/comentario');
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
     newCurso.save(function(){
        docente.findOne({Id_docente:request.payload.idTeacher},function(err,teacher){
          teacher.cursos.push(newCurso._id);
          teacher.save();
          return reply(newCurso);
        })
     });
  }//fin handler
};//fin create user

exports.GetCursoById = {
  handler: function(request, reply) {
    var todoCursos = curso.findById({_id:request.payload.id});
    return reply(todoCursos);
  }//fin handler
}//fin verAllCourse

exports.GetCourseComments = {
  handler: function(request,reply){
    var getComments = comments.find({Id_curso: request.payload.Id_curso },function(err,commentArray){``
      return reply(commentArray)
    })
  }
}
