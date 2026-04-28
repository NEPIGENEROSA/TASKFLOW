// Simulamos una base de datos con un array
let tasks = []; 

const taskService = {
    obtenerTodas: () => {
        return tasks;
    },
    
    crearTarea: (data) => {
        const nuevaTarea = {
            id: Date.now(),
            titulo: data.titulo,
            completada: false
        };
        tasks.push(nuevaTarea);
        return nuevaTarea;
    },
    
    eliminarTarea: (id) => {
        const index = tasks.findIndex(t => t.id === parseInt(id));
        if (index === -1) {
            throw new Error('NOT_FOUND'); // Lanzamos el error para que lo capture el middleware
        }
        tasks.splice(index, 1);
        return true;
    }
};

module.exports = taskService;