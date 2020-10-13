'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('students', 'StudentController.getStudents')
  Route.get('students/:id', 'StudentController.getStudentById')
  Route.post('students', 'StudentController.saveStudent')
  Route.put('students/:id', 'StudentController.updateStudent')
  Route.delete('students/:id', 'StudentController.deleteStudent')
}).prefix('api/v1')
