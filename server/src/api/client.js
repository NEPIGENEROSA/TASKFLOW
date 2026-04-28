// Este es nuestro "camarero" que va a la cocina (servidor)
const API_URL = "http://localhost:3000/api/v1/tasks";

export const taskApi = {
    // Función para pedir todas las tareas a la cocina
    async getAll() {
        const respuesta = await fetch(API_URL); // Llama al servidor
        if (!respuesta.ok) throw new Error("La cocina no responde");
        return await respuesta.json(); // Devuelve las tareas en formato objeto
    },

    // Función para enviar una nueva tarea a la cocina
    async create(titulo) {
        const respuesta = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo: titulo })
        });
        return await respuesta.json();
    },

    // Función para decir a la cocina que borre algo
    async delete(id) {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return true;
    }
};