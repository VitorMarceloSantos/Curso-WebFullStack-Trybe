import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(carParams: ICar) {
    // o restante dos atributos estão sendo usados no Vehicle Domain.
    const { doorsQty, seatsQty } = carParams;
    super(carParams);
   
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }

  public setDoorsQty(newDoorsQty: number) {
    this.doorsQty = newDoorsQty;
  }
  
  public getDoorsQty() {
    return this.doorsQty;
  }

  public setSeatsQty(newSeatsQty: number) {
    this.seatsQty = newSeatsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}

export default Car;