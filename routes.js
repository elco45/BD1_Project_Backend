var homeController = require('./controllers/homeController');
var vendedorController =require('./controllers/vendedorController');
var adminController =require('./controllers/adminController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');


exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, productos')}}},
					{method: 'GET', path: '/v1/productos', config: adminController.getProductos},
					{method: 'POST', path: '/v1/productos', config: adminController.postProductos},
					{method: 'GET', path: '/v1/users', config: adminController.getUsers},
					{method: 'POST', path: '/v1/linea_fact', config: vendedorController.GetProductoById},
					{method: 'PUT', path: '/v1/fact', config:vendedorController.PutProductos},
					{method: 'POST', path: '/v1/register', config: usersController.createUser},
					{method: 'POST', path: '/v1/login', config: authController.login},
					{method: 'GET', path: '/v1/logout', config: authController.logout},
					{method: 'PUT', path: '/v1/modprod', config: adminController.putProductos},
					{method: 'DELETE', path: '/v1/delprod/{id}', config: adminController.delProductos},
					{method: 'DELETE', path: '/v1/deluser/{username}', config: adminController.delUsers},
					{method: 'POST', path: '/v1/ingreso', config: vendedorController.addIngreso},
					{method: 'GET', path: '/v1/getIngreso', config:  adminController.getIngreso}];

