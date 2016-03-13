var estudiante = require('../schemas/estudiante');/*objetos q se van a volver tablas, ayuda a crud el bd*/

exports.getStudentCurso = {
  handler: function(request, reply){
    var teacher = estudiante.findOne({Id_estudiante:request.payload.id});
    reply(teacher);
  }//fin handler
}//fin getTeacherCurso
