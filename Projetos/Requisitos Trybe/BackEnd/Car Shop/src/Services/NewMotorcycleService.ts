import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import NewMotorcycleModel from '../Models/NewMotorcycleModel';
// import VerifyError from '../Utils/verifyError';

class NewMotorcycleService {
  private createMotorcycleDomain(motorcycleParams: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycleParams);
  }

  public async create(motorcycleParams: IMotorcycle) {
    const motorcycleModel = new NewMotorcycleModel();
    const newMotorcycle = await motorcycleModel.create(motorcycleParams);
    return this.createMotorcycleDomain(newMotorcycle);
  }
}

export default NewMotorcycleService;