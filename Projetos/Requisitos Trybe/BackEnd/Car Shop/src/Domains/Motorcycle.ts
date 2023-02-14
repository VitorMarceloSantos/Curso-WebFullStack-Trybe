import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor(motorcycleParams: IMotorcycle) {
    // o restante dos atributos estão sendo usados no Vehicle Domain.
    const { category, engineCapacity } = motorcycleParams; // enviando apenas os atributos comuns entre as interfaces
    super(motorcycleParams);

    this.category = category as 'Street' | 'Custom' | 'Trail';
    this.engineCapacity = engineCapacity;
  }

  public setcategory(newcategory: 'Street' | 'Custom' | 'Trail') {
    this.category = newcategory;
  }
  
  public getcategory() {
    return this.category;
  }

  public setengineCapacity(newengineCapacity: number) {
    this.engineCapacity = newengineCapacity;
  }

  public getengineCapacity() {
    return this.engineCapacity;
  }
}

export default Motorcycle;