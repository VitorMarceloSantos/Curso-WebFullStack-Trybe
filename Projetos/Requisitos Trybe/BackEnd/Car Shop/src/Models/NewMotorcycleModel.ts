import {
  Schema,
  model,
  models,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class NewMotorcycleModel extends AbstractODM<IMotorcycle> {
  constructor() {
    super();
    // o schema do super vai receber o Schema()
    super.schema = new Schema<IMotorcycle>({ // acessando o schema do super(AbstractODM)
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    // super.model -> acessando a model do AbstractODM
    super.model = models.Motorcycle || model('Motorcycle', this.schema); // this.schema do super() -> Vehicle;
  }

  // Todos os metodos vem do model AbstractODM...
}

export default NewMotorcycleModel;