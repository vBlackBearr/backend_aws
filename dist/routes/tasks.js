"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Task endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get: 
 *      summary: Get all tasks 
 *      tags: [Tasks]
 */
router.get('/tasks', _tasks.getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total tasks counter
 *      tags: [Tasks]
 */
router.get('/tasks/count', _tasks.getTaskCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get a task by identifier
 *      tags: [Tasks]
 */
router.get('/tasks/:id', _tasks.getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Save a new task
 *      tags: [Tasks]
 */
router.post('/tasks', _tasks.saveTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: Delete a task by identifier
 *      tags: [Tasks]
 */
router["delete"]('/tasks/:id', _tasks.deleteTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: Update a task by identifier
 *      tags: [Tasks]
 */
router.put('/tasks/:id', _tasks.updateTask);
var _default = router;
exports["default"] = _default;