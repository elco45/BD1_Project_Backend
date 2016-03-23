var homeController = require('./controllers/homeController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var cursosController = require('./controllers/cursosController');
var docenteController = require('./controllers/Docentecontroller');
var studentController = require('./controllers/studentController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, productos')}}},
					{method: 'POST', path: '/v1/register', config: usersController.createUser},
					{method: 'POST', path: '/v1/registerWithU', config: usersController.createUserWithU},
					{method: 'POST', path: '/v1/login', config: authController.login},
					{method: 'GET', path: '/v1/getControl', config: usersController.getCtrl},
					{method: 'POST', path: '/v1/getUniversityByName', config: usersController.getUniversityByName},
					{method: 'GET', path: '/v1/logout', config: authController.logout},
					{method: 'POST', path: '/v1/createCourse', config: cursosController.crearCursos},
					{method: 'GET', path: '/v1/docente', config: docenteController.getDocentes},
					{method: 'POST', path: '/v1/docenteid', config: docenteController.getDocenteById},
					{method: 'POST', path: '/v1/createUniversity', config: usersController.createUniversity},
					{method: 'POST', path: '/v1/updateTeacher', config: docenteController.UpdateTeacherCourse},
					{method: 'GET', path: '/v1/getUniversidades', config: usersController.getUniversidades},
					{method: 'POST', path: '/v1/getTeacherCourse', config: docenteController.getTeacherCurso},
					{method: 'POST', path: '/v1/getStudentCourse', config: studentController.getStudentCurso},
					{method: 'POST', path: '/v1/SeeCourse', config: cursosController.GetCursoById},
					{method: 'POST', path: '/v1/getUniversity', config: usersController.getUniversityByName},
					{method: 'POST', path: '/v1/getUniversityById', config: usersController.getUniversityById},
					{method: 'POST', path: '/v1/getDocenteByUniversidad', config: studentController.getDocenteByUniversidad},
					{method: 'POST', path: '/v1/getCourseByIdDocente', config: studentController.getCourseByIdDocente},
					{method: 'POST', path: '/v1/estaEnCurso', config: studentController.estaEnCurso},
					{method: 'POST', path: '/v1/addConfirmacion', config: studentController.addConfirmacion},
					{method: 'POST', path: '/v1/getConfirmacionById', config: docenteController.getConfirmacionById},
					{method: 'POST', path: '/v1/getEstudianteById', config: studentController.GetEstudianteById},
					{method: 'POST', path: '/v1/aceptarConfirmacion', config: docenteController.AceptarConfirmacion},
					{method: 'POST', path: '/v1/rechazarConfirmacion', config: docenteController.RechazarConfirmacion},
					{method: 'POST', path: '/v1/crearTarea', config: docenteController.CreateTarea},
					{method: 'POST', path: '/v1/llenarCursoConTarea', config: docenteController.CursosTareas},
					{method: 'POST', path: '/v1/getTarea', config: docenteController.ConseguirTarea},
					{method: 'POST', path: '/v1/uploadTarea', config: studentController.subirTarea},
					{method: 'POST', path: '/v1/updateTarea', config: studentController.updateTareaAnswer},
					{method: 'POST', path: '/v1/verifySolution', config: studentController.verificarSiTieneAnswer},
					{method: 'POST', path: '/v1/modificaSolution', config: studentController.ModificarAnswer},
					{method: 'POST', path: '/v1/getSolucion', config: docenteController.GetSolution},
					{method: 'POST', path: '/v1/getEstudianteNombre', config: docenteController.GetEstudianteName},
					{method: 'POST', path: '/v1/updateGrade', config: docenteController.PutNota},
					{method: 'POST', path: '/v1/gettareadecurso', config: studentController.getCourseHW},
					{method: 'POST', path: '/v1/getsolucionesdetarea', config: studentController.getHWAnswer},
					{method: 'POST', path: '/v1/getnotasolucion', config: studentController.getAnswerNota},
					{method: 'POST', path: '/v1/getAnuncios', config: docenteController.getAnuncios},
					{method: 'POST', path: '/v1/crearAnuncios', config: docenteController.crearAnuncios},
					{method: 'POST', path: '/v1/getAnuncios_Estudiantes', config: studentController.getAnuncios_Estudiantes},
					{method: 'POST', path: '/v1/addParentComment', config: usersController.AddParentComment},
					{method: 'POST', path: '/v1/addComment', config: usersController.AddComment},
					{method: 'POST', path: '/v1/getCourseComments', config: cursosController.GetCourseComments}
					];
