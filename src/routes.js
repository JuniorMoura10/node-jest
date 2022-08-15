import { Router } from 'express';
import { usersController } from './controller/usersController.js';
import { database } from './database.js';

const routes = Router();

routes.get('/users', usersController.getUsers)

routes.post('/users', usersController.createUsers);

export { routes }