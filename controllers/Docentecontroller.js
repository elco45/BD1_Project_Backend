var docente = require('../schemas/docente');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var curso = require('../schemas/curso')

exports.getDocentes = {
  handler: function(request, reply){
    var docentes = docente.find({});
    reply(docentes);
  }
}


exports.getTeacherCurso = {
  handler: function(request, reply){
    var teacher = docente.findOne({Id_docente:request.payload.id});
    reply(teacher);
  }//fin handler
}//fin getTeacherCurso

exports.creardocente = {
  handler: function(request, reply){
    var newDocente = new docente({
      Id_docente: request.payload.Id_docente,
      nombre: request.payload.nombre,
      apellido: request.payload.apellido,
      especialidad: request.payload.especialidad,
      Id_universidad: request.payload.Id_universidad,
      password: request.password

    });
    newDocente.save();
    return reply('ok');
  }
}

exports.UpdateTeacherCourse = {
  handler: function(request,reply){
    docente.findOne({Id_docente:request.payload.docente},function(err,teacher){
      var arrayCursos = teacher.cursos;
      arrayCursos.push(request.payload._id);
      teacher.cursos = arrayCursos;
      teacher.save(function(err){
        if(err) throw err;
      })
    })
    reply('ok');
  }
}

exports.getDocenteById = {
  handler: function(request, reply){
    docente.find({Id_docente:request.payload.idDocente},function(err,doc){
      return reply({nombre: doc[0].nombre});
    });
  }
}

exports.getConfirmacionById={
  handler: function(request, reply){
    curso.findById(request.payload.Id_curso,function(err,course){
      reply(course);
    });
  }
}


