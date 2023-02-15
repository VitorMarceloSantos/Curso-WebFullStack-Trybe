import { Router } from 'express';
import NewCarController from '../Controllers/NewCarController';
import NewMotorcycleController from '../Controllers/NewMotorcycleController';
import FindResultCar from '../Utils/FindResultCar';
import FindResultMotorcycle from '../Utils/FindResultMotorcycle';

const routes = Router();

// Refatoração: fazer o index das routers

// Cars
routes.post(
  '/cars',
  (req, res, next) => new NewCarController(req, res, next).create(),
);
routes.get(
  '/cars/:id',
  FindResultCar, // Middleware
  (req, res, next) => new NewCarController(req, res, next).findById(),
);
routes.get(
  '/cars',
  (req, res, next) => new NewCarController(req, res, next).findAll(),
);
routes.put(
  '/cars/:id',
  FindResultCar, // Middleware
  (req, res, next) => new NewCarController(req, res, next).updateId(),
);

// Motorcycles

routes.post(
  '/motorcycles',
  (req, res, next) => new NewMotorcycleController(req, res, next).create(),
);
routes.get(
  '/motorcycles/:id',
  FindResultMotorcycle, // Middleware
  (req, res, next) => new NewMotorcycleController(req, res, next).findById(),
);
routes.get(
  '/motorcycles',
  (req, res, next) => new NewMotorcycleController(req, res, next).findAll(),
);
routes.put(
  '/motorcycles/:id',
  FindResultMotorcycle, // Middleware
  (req, res, next) => new NewMotorcycleController(req, res, next).updateId(),
);

export default routes;