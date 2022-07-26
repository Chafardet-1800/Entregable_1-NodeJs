const router = require('express').Router()
const httpToDo = require('./toDo.http')

router.route('/list')
    .get(httpToDo.getAll)
    .post(httpToDo.create)

router.route('/list/:id')
    .get(httpToDo.getById)
    .put(httpToDo.update)
    .delete(httpToDo.delet)

module.exports = {
    router
}
