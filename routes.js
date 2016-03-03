var homeController = require('./controllers/homeController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var cursosController = require('./controllers/cursosController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, productos')}}},
					{method: 'POST', path: '/v1/register', config: usersController.createUser},
					{method: 'POST', path: '/v1/login', config: authController.login},
					{method: 'GET', path: '/v1/getControl', config: usersController.getCtrl},
					{method: 'GET', path: '/v1/logout', config: authController.logout},
					{method: 'POST', path: '/v1/createCourse', config: cursosController.crearCursos}
					//{method: 'GET', path: '/v1/docente', config: usersController.getdocentes},
					//{method: 'POST', path: '/v1/docenteid', config: usersController.getDocenteById}
					];
