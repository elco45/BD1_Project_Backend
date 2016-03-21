var estudiante = require('../schemas/estudiante');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var docente = require('../schemas/docente');
var curso = require('../schemas/curso');
var Anuncio = require('../schemas/Anuncios');
exports.getStudentCurso = {
  	handler: function(request, reply){
    	var student = estudiante.findOne({Id_estudiante:request.payload.id});
    	reply(student);
  	}
}

exports.getDocenteByUniversidad={
	handler:function(request,reply){
		var docentes=docente.find({Id_universidad:request.payload.Id_universidad});
		reply(docentes);
	}
}

exports.getCourseByIdDocente={
	handler:function(request,reply){
		var cursos =curso.find({docente:request.payload.Id_docente});
		reply(cursos);
	}
}

exports.estaEnCurso={
	handler:function(request,reply){
		curso.find({_id:request.payload.Id_Curso},function(err,course){
			var existe={
				esta:false
			};
			for (var i = 0; i < course[0].confirmacion_alum.length; i++) {
				if (course[0].confirmacion_alum[i]==request.payload.Id_estudiante) {
					existe.esta=true;
					break;
				}
			}
			reply(existe);
		})
	}
}

exports.addConfirmacion={
	handler:function(request,reply){
		curso.find({_id:request.payload.Id_Curso},function(err,course){
			course[0].confirmacion_alum.push(request.payload.Id_estudiante);
			course[0].save(function(error){
				if (error) {
					throw error;
				}
			});
			reply('ok')
		})
	}
}

exports.GetEstudianteById={
	handler:function(request,reply){
		var student=estudiante.findOne({Id_estudiante:request.payload.Id_estudiante});
		reply(student);
	}
}


exports.getAnuncios_Estudiantes = {
  handler: function(request, reply){
  	 console.log(request.payload.Id_curso)
       var Anuncioss = Anuncio.find({ "Id_curso":request.payload.Id_curso});
       console.log(Anuncioss)
     reply(Anuncioss);
  }
}