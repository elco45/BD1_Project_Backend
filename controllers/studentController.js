var estudiante = require('../schemas/estudiante');/*objetos q se van a volver tablas, ayuda a crud el bd*/
var docente = require('../schemas/docente');
var curso = require('../schemas/curso');
var tarea = require('../schemas/tarea');
var solucion = require('../schemas/solucion');

exports.getStudentCurso = {
  	handler: function(request, reply){
    	var student = estudiante.findOne({Id_estudiante:request.payload.id});
    	reply(student);
  	}
}

exports.subirTarea = {
  	handler: function(request, reply){
  		var Solucion = new solucion({
  			nombreArchivo:request.payload.nameArchivo,
  			Id_tarea:request.payload.tarea._id,
  			respuesta:request.payload.archivo,
  			nota: 0,
  			Id_estudiante:request.payload.Id_estudiante.IdUser
  		});
  		Solucion.save();
  		return reply(Solucion);
  	}
}
exports.verificarSiTieneAnswer = {
  handler: function(request,reply){
    var Subido = solucion.findOne({Id_tarea:request.payload.id_tarea,Id_estudiante:request.payload.Id_estudiante});
    return reply(Subido);
  }//fin handler
}//fin verificarsitieneanswer

exports.ModificarAnswer = {
  handler: function(request,reply){
    var Subido = solucion.findOne({_id:request.payload.busqueda},function(err,answer){
      answer.nombreArchivo = request.payload.newData.nameArchivo;
			answer.respuesta = request.payload.newData.archivo;
      answer.save(function(err){
        if(err) throw err;
      })
      return reply('ok');
    });//fin var
  }//fin handler
}//fin ModificarAnswer

exports.updateTareaAnswer = {
  handler: function(request,reply){
    tarea.findOne({_id:request.payload.answer.Id_tarea},function(err,HW){
      var arrayTarea = HW.solucion;
      arrayTarea.push(request.payload.answer._id);
      HW.solucion = arrayTarea;
      HW.save(function(err){
        if(err) throw err;
      })
      return reply('ok');
    })
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
