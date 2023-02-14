import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import NewCarModel from '../Models/NewCarModel';
import VerifyError from '../Utils/verifyError';

class NewCarService {
  private createCarDomain(carParams: ICar): Car {
    return new Car(carParams);
  }

  public async create(carParams: ICar) {
    const carModel = new NewCarModel();
    const newCar = await carModel.create(carParams);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const findODM = new NewCarModel();
    const arrayFind = await findODM.findAll();
    // if (arrayFind.length === 0) throw new VerifyError('Car not found', 404);
    const arrayCars = arrayFind
      .map((car) => this.createCarDomain(car));
    return arrayCars;
  }

  public async findById(id: string) {
    const findODM = new NewCarModel();
    const findCar = await findODM.findById(id);

    if (findCar?.length === 0) throw new VerifyError('Car not found', 404);
    if (findCar === undefined) throw new VerifyError('Invalid mongo id', 422);

    const arrayCars = findCar
      .map((car) => this.createCarDomain(car));
    return arrayCars;
  }
}

export default NewCarService;