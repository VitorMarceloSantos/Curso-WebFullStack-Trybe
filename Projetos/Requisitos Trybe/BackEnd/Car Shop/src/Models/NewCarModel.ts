import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class NewCarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(carParams: ICar): Promise<ICar> {
    return this.model.create({ ...carParams });
  }

  // Buscar por todos
  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }
  
  // Buscar por Id
  public async findById(id: string): Promise<ICar[] | undefined> {
    if (!isValidObjectId(id)) return undefined; // isValidObjet: retorna true or false, verifica se o objeto tem um id no formato válido
    // return this.model.findById(id);
    return this.model.find({ _id: id });
  }
}

export default NewCarModel;