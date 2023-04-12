import { Router } from 'express';
import {deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask} from "../controllers/tasks";

const router =  Router()

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
router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks/count:
 *  get:
 *      summary: Get total tasks counter
 *      tags: [Tasks]
 */
router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Get a task by identifier
 *      tags: [Tasks]
 */
router.get('/tasks/:id',getTask)

/**
 * @swagger
 * /tasks:
 *  post:
 *      summary: Save a new task
 *      tags: [Tasks]
 */
router.post('/tasks',saveTask)

/**
 * @swagger
 * /tasks:
 *  delete:
 *      summary: Delete a task by identifier
 *      tags: [Tasks]
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks:
 *  put:
 *      summary: Update a task by identifier
 *      tags: [Tasks]
 */
router.put('/tasks/:id', updateTask)


export default router