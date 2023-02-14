import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';

class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor() {
    this.schema = new Schema({});
    this.model = models.Vehicle || model('Vehicle', this.schema);
  }

  public async create(vehicleParams: T): Promise<T> {
    return this.model.create({ ...vehicleParams });
  }

  // Buscar por todos
  public async findAll(): Promise<T[]> {
    return this.model.find();
  }
  
  // Buscar por Id
  public async findById(id: string): Promise<T[] | undefined> {
    if (!isValidObjectId(id)) return undefined; // isValidObjet: retorna true or false, verifica se o objeto tem um id no formato válido
    // return this.model.findById(id);
    return this.model.find({ _id: id });
  }

  // Atualizar por Id
  public async updateId(id: string, vehicleUpdate: T): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id }, // buscando pelo id
      { ...vehicleUpdate } as UpdateQuery<T>, // findByIdAnUpdate -> busca o elemento e faz a atualização
      { new: true }, // retornar o documento que foi atualizado
    );
  }
}

export default AbstractODM;