const express = require('express');

const tasksRouter = express.Router();

// Controllers
const {
  createTasks,
  getAllTasks,
  getTaskByStatus,
  upadateTasks,
  deleteTasks,
} = require('../controllers/tasks.controller');

// Middlewares
const { tasksExists } = require('../middlewares/tasks.middleware');

// Endpoints
tasksRouter.get('/', createTasks);

tasksRouter.get('/', getAllTasks);

tasksRouter.post('/:status', tasksExists, getTaskByStatus);

tasksRouter.patch('/:id', tasksExists, upadateTasks);

tasksRouter.delete('/:id', tasksExists, deleteTasks);

module.exports = { tasksRouter };
