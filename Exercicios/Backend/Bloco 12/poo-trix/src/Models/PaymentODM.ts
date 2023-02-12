import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IPayment from '../Interfaces/IPayment';

class PaymentODM {
  private schema: Schema;
  private model: Model<IPayment>;

  constructor() {
    this.schema = new Schema<IPayment>({
      payByPerson: { type: String, required: true },
      payToPerson: { type: String, required: true },
      amount: { type: Number, required: true },
      key: { type: String, required: true },
    });
    this.model = models.Payment || model('Payment', this.schema);
  }

  // Adicionar novo pagamento
  public async create(payment: IPayment): Promise<IPayment> {
    return this.model.create({ ...payment });
  }

  // Buscar por todos
  public async findAll(): Promise<IPayment[]> {
    return this.model.find();
  }

  // Buscar por chave
  public async findKey(key: string): Promise<IPayment[]> {
    return this.model.find({ key });
  }
}

export default PaymentODM;
