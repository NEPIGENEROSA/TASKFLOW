const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const taskRoutes = require('./routes/task.routes'); // <-- Mira que esto esté bien

const app = express();

app.use(cors());
app.use(express.json());

// Aquí es donde le decimos al servidor que use las rutas de tareas
app.use('/api/v1/tasks', taskRoutes); 

// Middleware de manejo de errores (siempre al final)
app.use((err, req, res, next) => {
    console.error("[Server Error]:", err.message);

    // Si el error es el que lanzamos en el servicio (NOT_FOUND)
    if (err.message === 'NOT_FOUND') {
        return res.status(404).json({ error: 'Recurso no encontrado' });
    }

    // Para cualquier otro error desconocido
    res.status(500).json({ error: 'Algo ha salido mal en el servidor' });
});

app.listen(config.port, () => {
    console.log(`🚀 Servidor listo en http://localhost:${config.port}`);
});