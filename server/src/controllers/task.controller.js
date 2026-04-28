const taskService = require('../services/task.service');

const taskController = {
    getAll: (req, res) => {
        const tasks = taskService.obtenerTodas();
        res.json(tasks);
    },
    create: (req, res) => {
        const { titulo } = req.body;
        if (!titulo) return res.status(400).json({ error: "Falta el título" });
        const nueva = taskService.crearTarea({ titulo });
        res.status(201).json(nueva);
    },
    delete: (req, res) => {
        try {
            taskService.eliminarTarea(req.params.id);
            res.status(204).send();
        } catch (e) {
            res.status(404).json({ error: "No existe" });
        }
    }
};
module.exports = taskController;