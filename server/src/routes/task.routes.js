const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

// OJO: Aquí debe ser '/' porque el prefijo '/api/v1/tasks' ya se lo pusimos en el index.js
router.get('/', taskController.getAll); 
router.post('/', taskController.create);
router.delete('/:id', taskController.delete);

module.exports = router;