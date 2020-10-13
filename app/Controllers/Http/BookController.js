'use strict'

const Database = use('Database')

class BookController {
    async index ({ request, response }) {
        try {
            return {
            status: 200,
            type: 'type',
            message: 'message',
            data: 'data'
        }
        } catch(err) {
            return {
            status: 200,
            type: 'type',
            message: 'message',
            data: 'data'
        }
        }
  }
}

module.exports = BookController
