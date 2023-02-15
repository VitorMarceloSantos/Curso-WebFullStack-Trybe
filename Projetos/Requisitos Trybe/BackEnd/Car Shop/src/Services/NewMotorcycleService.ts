import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import NewMotorcycleModel from '../Models/NewMotorcycleModel';
import VerifyError from '../Utils/verifyError';

class NewMotorcycleService {
  private createMotorcycleDomain(motorcycleParams: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycleParams);
  }

  public async create(motorcycleParams: IMotorcycle) {
    const motorcycleModel = new NewMotorcycleModel();
    const newMotorcycle = await motorcycleModel.create(motorcycleParams);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async findAll() {
    const findODM = new NewMotorcycleModel();
    const arrayFind = await findODM.findAll();
    // if (arrayFind.length === 0) throw new VerifyError('moto not found', 404);
    const arrayMotorcycle = arrayFind
      .map((moto) => this.createMotorcycleDomain(moto));
    return arrayMotorcycle;
  }

  public async findById(id: string) {
    const findODM = new NewMotorcycleModel();
    const findmoto = await findODM.findById(id);

    // Uma forma alternativa de pegar o erro(Erro personalizado - httpException)
    // Poderia ter utilizado o middleware para verificar o Id
    if (findmoto?.length === 0) throw new VerifyError('Motorcycle not found', 404);
    if (findmoto === undefined) throw new VerifyError('Invalid mongo id', 422);

    const arrayMotorcycle = findmoto
      .map((moto) => this.createMotorcycleDomain(moto));
    return arrayMotorcycle;
  }

  public async updateId(id: string, motoUpdate: IMotorcycle) {
    const updateModel = new NewMotorcycleModel();
    const updateMoto = await updateModel.updateId(id, motoUpdate);
    if (updateMoto !== null) return this.createMotorcycleDomain(updateMoto);
  }
}

export default NewMotorcycleService;