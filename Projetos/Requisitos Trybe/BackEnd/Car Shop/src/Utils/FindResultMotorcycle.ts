import { NextFunction, Request, Response } from 'express';
import VerifyId from '../Middlewares/VerifyId';
import NewMotorcycleModel from '../Models/NewMotorcycleModel';

const FindResultMotorcycle = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newModel = new NewMotorcycleModel();
  const newFind = await newModel.findById(id);

  new VerifyId('Motorcycle not found', newFind).findId(res, next);
};
export default FindResultMotorcycle;