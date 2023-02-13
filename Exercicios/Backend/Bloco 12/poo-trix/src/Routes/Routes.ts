import { Router } from 'express';
import TransferController from '../Controllers/TransferController';

const routes = Router();

routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
);
routes.get(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).findAll(),
);
routes.get(
  '/transfer/:key',
  (req, res, next) => new TransferController(req, res, next).findKey(),
);

routes.patch(
  '/transfer/:id',
  (req, res, next) => new TransferController(req, res, next).updatePayment(),
);

export default routes;
