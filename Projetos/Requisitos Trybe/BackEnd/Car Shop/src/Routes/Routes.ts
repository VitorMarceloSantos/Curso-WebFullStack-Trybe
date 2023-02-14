import { Router } from 'express';
import NewCarController from '../Controllers/NewCarController';
import NewMotorcycleController from '../Controllers/NewMotorcycleController';
import VerifyId from '../Middlewares/VerifyId';

const routes = Router();

// Refatoração: fazer o index das routers

// Cars
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
routes.put(
  '/cars/:id',
  VerifyId.findId, // Quando se utiliza o static não há a necessidade de instaciar uma novo objeto, seu uso pode ser direto(VerifyId.findId)
  (req, res, next) => new NewCarController(req, res, next).updateId(),
);

// Motorcycles

routes.post(
  '/motorcycles',
  (req, res, next) => new NewMotorcycleController(req, res, next).create(),
);

export default routes;