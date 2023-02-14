import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import NewCarService from '../Services/NewCarService';
import createCar from '../Utils/createCar';

class NewCarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: NewCarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new NewCarService();
  }

  public async create() {
    const carParams: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
   
    const newCar = await this.service.create(carParams);
    return this.res.status(201).json(newCar);
  }

  public async findAll() {
    try {
      const newFind = await this.service.findAll();
      return this.res.status(200).json(newFind);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    try {
      const newFind = await this.service.findById(id);
      return this.res.status(200).json(...newFind);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async updateId() {
    try {
      const { id } = this.req.params;
      const carUpdate = createCar(this.req);
      const newCar = await this.service.updateId(id, carUpdate);
      return this.res.status(200).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default NewCarController;