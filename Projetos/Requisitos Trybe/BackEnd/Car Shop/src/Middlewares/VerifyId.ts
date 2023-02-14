import { NextFunction, Request, Response } from 'express';
import NewCarModel from '../Models/NewCarModel';

class VerifyId {
  // Quando se utiliza o static não há a necessidade de instaciar uma novo objeto, seu uso pode ser direto(VerifyId.findId)
  public static async findId(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { id } = req.params;
    const newModel = new NewCarModel();
    const newFind = await newModel.findById(id);

    if (newFind?.length === 0) return res.status(404).json({ message: 'Car not found' });
    if (newFind === undefined) return res.status(422).json({ message: 'Invalid mongo id' });
    
    next();
  }
}

export default VerifyId;