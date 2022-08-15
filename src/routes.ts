import { Router } from 'express';
import { UsersController } from './controller/usersController';
import { database } from './database';

const routes = Router();
const usersController = new UsersController();

routes.get('/users', usersController.getUsers)

routes.post('/users', usersController.createUsers);

export { routes }