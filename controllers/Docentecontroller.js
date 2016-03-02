var docente = require('docente');/*objetos q se van a volver tablas, ayuda a crud el bd*/

exports.getDocentes = {
  handler: function(request, reply){
    var docentes = docente.find({});
    reply(docentes);
  }
}

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
    console.log('Docente saved');
    return reply('ok');
  }
}

exports.getDocenteById = {
  handler: function(request, reply){
    var docente = docente.find({Id_docente:request.payload.Id_docente});
    reply(docente);
  }
} 
