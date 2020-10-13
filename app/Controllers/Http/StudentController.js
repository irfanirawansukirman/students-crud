'use strict'

const Student = use('App/Models/Student')
const Database = use('Database')

class StudentController {
    async saveStudent ({request, response}) {
        const studentInfo = request.only(['nisn', 'name', 'study'])
        var status = 400 
        var type = 'failed'
        var message = 'Failed get all books'
        var data = null

        const lastStudent = await Student.all()
        const student = new Student()
        student.nisn = studentInfo.nisn
        student.name = studentInfo.name
        student.study = studentInfo.study
        await student.save()
        const currentStudent = await Student.all()

        if (currentStudent != null && lastStudent != null) {
            if (currentStudent.size() > lastStudent.size()) {
                status = 201
                type = 'success'
                message = 'Success create a student'
                data = student
            } 
        }

        return response.status(status).json({
            status: status,
            type: type,
            message: message,
            data: data
        })
    }

    async getStudents ({request, response}) {
        let query = request.get()
        let currentPage = query.page
        let allStudents = await Database.select('*').from('students')
        let students = await Database.table('students').offset((currentPage - 1) * 10).limit(10)
        var status = 400 
        var type = 'failed'
        var message = 'Failed get all books'
        var data = null

        if (students != null) {
            status = 200
            type = 'success'

            if (students.length > 0) { // if (students.size() > 0) {
                message = 'Success get all students'
                data = students
            } else {
                message = 'Students is empty'
            }
        }

        var totalPage = 0
        if (allStudents.length % 10 == 0) { // if (data.size() % 10 == 0) {
            totalPage = allStudents.length / 10 // data.size() / 10
        } else {
            totalPage = Math.ceil(allStudents.length / 10) // Math.ceil(data.size() / 10)
        }

        var nextPage = 0 
        if (totalPage == parseInt(currentPage)) {
            nextPage = parseInt(currentPage)
        } else if (parseInt(currentPage) > totalPage) {
            nextPage = totalPage
        } else {
            nextPage = parseInt(currentPage) + 1
        }

        let meta = {
            total_page: totalPage,
            prev: parseInt(currentPage) - 1,
            next: nextPage,
            current: parseInt(currentPage),
            per_page: 10
        }

        return response.status(status).json({
            status: status,
            type: type,
            message: message,
            data: data,
            meta: meta
        })
    }

    async getStudentById ({params, response}) {
        let student = await Student.find(params.id)
        var status = 400
        var type = 'failed'
        var message = 'Student not found'
        var data = null

        if (student != null) {
            status = 200
            type = 'success'
            message = 'Success get student'
            data = student
        }

        return response.status(status).json({
            status: status,
            type: type,
            message: message,
            data: data
        })
    }

    async updateStudent ({params, request, response}) {
        const studentInfo = request.only(['nisn', 'name', 'study'])
        var status = 400
        var type = 'failed'
        var message = 'Student not found'
        var data = null
        
        const student = await Student.find(params.id)
        if (student) {
            student.nisn = studentInfo.nisn
            student.name = studentInfo.name
            student.study = studentInfo.study
            await student.save()

            status = 200
            type = 'success'
            message = 'Success update student'
            data = student
        }
        
        return response.status(status).json({
            status: status,
            type: type,
            message: message,
            data: data
        })
    }   

    async deleteStudent ({params, response}) {
        var status = 400
        var type = 'failed'
        var message = 'Student not found'
        var data = null
        
        const student = await Student.find(params.id)
        if (student) {
            await student.delete()
            
            status = 200
            type = 'success'
            message = 'Success delete student'
            data = null
        }

        return response.status(status).json({
            status: status,
            type: type,
            message: message,
            data: data
        })
    }
}

module.exports = StudentController
