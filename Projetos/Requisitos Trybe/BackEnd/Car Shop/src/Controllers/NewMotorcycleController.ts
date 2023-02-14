import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import NewMotorcycleService from '../Services/NewMotorcycleService';

class NewMotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: NewMotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new NewMotorcycleService();
  }

  public async create() {
    const motorcycleParams: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };
   
    const newMotorcycle = await this.service.create(motorcycleParams);
    return this.res.status(201).json(newMotorcycle);
  }
}

export default NewMotorcycleController;