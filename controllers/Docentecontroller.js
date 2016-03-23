var docente = require('../schemas/docente');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var curso = require('../schemas/curso');
var tarea = require('../schemas/tarea');
var solucion = require('../schemas/solucion');
var estudiante = require('../schemas/estudiante')
var Anuncio = require('../schemas/Anuncios');
exports.getDocentes = {
  handler: function(request, reply){
    var docentes = docente.find({});
    reply(docentes);
  }
}

exports.PutNota = {
  handler: function(request,reply){
    var Solution = solucion.findOne({_id:request.payload.cambio._id},function(err,answer){
      answer.nota = request.payload.newNota;
      answer.save();
      return reply(answer);
    });

  }
}//fin modificar nota

exports.GetSolution = {
  handler: function(request, reply) {
    var Solution = solucion.findById({_id:request.payload.hw});
    return reply(Solution);
  }//fin handler
}

exports.GetEstudianteName = {
  handler: function(request, reply) {
    var Student = estudiante.findOne({Id_estudiante:request.payload.idEstudiante});
    return reply(Student);
  }//fin handler
}

exports.CreateTarea = {
  handler: function(request,reply){
    var newTarea = new tarea({
      archivo: request.payload.archivo,
      nombre: request.payload.nameArchivo,
      fecha_entrega: request.payload.tarea.fecha,
      parcial: request.payload.tarea.parcial,
      solucion: []
    });
    newTarea.save();
    return reply(newTarea);
  }//fin handler
}//fin CreateTarea

exports.ConseguirTarea = {
  handler: function(request, reply) {
    var Tareas = tarea.findById({_id:request.payload.id});
    return reply(Tareas);
  }//fin handler
}//fin verAllCourse

exports.CursosTareas = {
  handler: function(request,reply){
    curso.findOne({_id:request.payload.cursoActual},function(err,HW){
      var arrayTarea = HW.tareas;
      arrayTarea.push(request.payload.idTarea);
      HW.tareas = arrayTarea;
      HW.save(function(err){
        if(err) throw err;
      })
      return reply('ok');
    });
  }//fin handler
}//fin CursosTareas

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

exports.AceptarConfirmacion={
  handler: function(request, reply){
    curso.findById(request.payload.Id_curso,function(err,course){
      for (var i = 0; i < course.confirmacion_alum.length; i++) {
        if (request.payload.Id_estudiante==course.confirmacion_alum[i]) {
          course.estudiantes.push(request.payload.Id_estudiante);
          course.confirmacion_alum.splice(i,1);
          break;
        }
      }
      course.save(function(){
        estudiante.findOne({Id_estudiante:request.payload.Id_estudiante},function(err,alumno){
          alumno.cursos.push(request.payload.Id_curso);
          alumno.save();
          return reply('ok');
        })
      })
    });
  }
}

exports.RechazarConfirmacion={
  handler: function(request, reply){
    curso.findById(request.payload.Id_curso,function(err,course){
      for (var i = 0; i < course.confirmacion_alum.length; i++) {
        if (request.payload.Id_estudiante==course.confirmacion_alum[i]) {
          course.confirmacion_alum.splice(i,1);
          break;
        }
      }
      course.save();
      return reply('ok');
    });
  }
}


exports.crearAnuncios = {
   handler: function(request, reply){
    var newAnuncio = Anuncio({
      Id_curso:request.payload.idCurso,
      descripcion :request.payload.des,
      titulo:request.payload.titulo
    });
    newAnuncio.save();
    return reply('ok');
   }
}

exports.getAnuncios = {
  handler: function(request, reply){
    var Anuncioss = Anuncio.find({ "Id_curso":request.payload.Id_curso});

    reply(Anuncioss);
  }
}

