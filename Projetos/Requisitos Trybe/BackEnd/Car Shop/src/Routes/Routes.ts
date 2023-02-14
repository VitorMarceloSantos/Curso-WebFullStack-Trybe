import { Router } from 'express';
import NewCarController from '../Controllers/NewCarController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new NewCarController(req, res, next).create(),
);
routes.get(
  '/cars/:id',
  (req, res, next) => new NewCarController(req, res, next).findById(),
);
routes.get(
  '/cars',
  (req, res, next) => new NewCarController(req, res, next).findAll(),
);

export default routes;