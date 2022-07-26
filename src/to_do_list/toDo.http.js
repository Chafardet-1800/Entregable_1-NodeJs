const controler = require('./toDo.controller')

const getAll =  (req, res) => {
    const data = controler.getToDoList()
    res.status(200).json({
        items: data.length,
        data: data
    })
}

const getById = (req, res) => {
    const id = Number(req.params.id)

    if(id){
        const data = controler.getToDoById(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const create = (req, res) => {
    const Obj = req.body;

    const data = controler.createToDo(Obj)

    if(data){
        res.status(200).json(data)
    }else {
        res.status(400).json({message: 'Invalid ID'})
    }

}

const delet = (req, res) => {
    const id = Number(req.params.id)

    if(id){
        const data = controler.deleteToDo(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

const update = (req, res) => {
    const id = Number(req.params.id)

    if(id){
        const data = controler.updateToDo(id)
        if(data.id){
            res.status(200).json(data)
        }else {
            res.status(400).json({message: 'Invalid ID'})
        }
    }else {
        res.status(400).json({message: 'Id is not a number'})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    delet,
    update
}