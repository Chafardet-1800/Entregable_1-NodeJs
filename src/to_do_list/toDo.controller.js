const toDoList = []

// El controlador para retornar la lista completa
const getToDoList = () => {
    return toDoList;
};

// El controlador para retornar un elemento de la lista segun su id
const getToDoById = (id) => {
    const filteredList = toDoList.filter((e) => e.id === id);
    return filteredList[0];
};

// El controlador para crear un elemento nuevo en la lista
const createToDo = (ToDoObject) => {

    if(toDoList.length === 0) {
        const newToDo = {
            id: 1,
            title: ToDoObject.title,
            descripcion: ToDoObject.descripcion,
            status: ToDoObject.status,
        };
        toDoList.push(newToDo);
        return newToDo;
    }

    const newToDo = {
        id: toDoList[toDoList.length - 1].id + 1,
        title: ToDoObject.title,
        descripcion: ToDoObject.descripcion,
        status: ToDoObject.status,
    };

    toDoList.push(newToDo);

    return newToDo;
};

// El controlador para eliminar un elemento de la lista
const deleteToDo = (toDoId) => {
    const id = Number(toDoId);
    const index = toDoList.findIndex(e => e.id === id);

    if(index !== -1) {
        toDoList.splice(index, 1);
        return toDoList;
    }

    return undefined
};

// El controlador para editar un elemento de la lista

const updateToDo = (Obj) => {
    const id = Obj.id;
    const index = toDoList.findIndex(e => e.id === id);

    if(index !== -1) {
        toDoList[index] = {
            id: id,
            title: Obj.title,
            descripcion: Obj.descripcion,
            status: Obj.status,
        };

        return toDoList;
    }

    return undefined
};

module.exports = {
    getToDoList,
    getToDoById,
    createToDo,
    deleteToDo,
    updateToDo
};
