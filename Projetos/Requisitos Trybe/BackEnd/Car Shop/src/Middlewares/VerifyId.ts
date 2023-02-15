import { NextFunction, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import ICar from '../Interfaces/ICar';

class VerifyId {
  public errorText: string;
  public resultId: IMotorcycle[] | ICar[] | undefined;

  constructor(message: string, resultId: IMotorcycle[] | ICar[] | undefined) {
    this.errorText = message;
    this.resultId = resultId;
  }

  // Quando se utiliza o static não há a necessidade de instaciar uma novo objeto, seu uso pode ser direto(VerifyId.findId)
  public async findId(
    res: Response,
    next: NextFunction,
  ) {
    if (this.resultId?.length === 0) return res.status(404).json({ message: this.errorText });
    if (this.resultId === undefined) return res.status(422).json({ message: 'Invalid mongo id' });
    
    next();
  }
}

export default VerifyId;