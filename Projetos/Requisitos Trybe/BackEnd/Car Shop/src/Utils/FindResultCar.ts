import { Request, NextFunction, Response } from 'express';
import NewCarModel from '../Models/NewCarModel';
import VerifyId from '../Middlewares/VerifyId';

const FindResultCar = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newModel = new NewCarModel();
  const newFind = await newModel.findById(id);

  new VerifyId('Car not found', newFind).findId(res, next);
};
export default FindResultCar;