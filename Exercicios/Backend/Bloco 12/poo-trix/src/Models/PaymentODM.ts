import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
} from 'mongoose';
import IPayment from '../Interfaces/IPayment';
import PaymentStatus from '../utils/PaymentStatus';

class PaymentODM {
  private schema: Schema;
  private model: Model<IPayment>;

  constructor() {
    this.schema = new Schema<IPayment>({
      payByPerson: { type: String, required: true },
      payToPerson: { type: String, required: true },
      amount: { type: Number, required: true },
      key: { type: String, required: true },
      status: { type: Number, required: true },
    });
    this.model = models.Payment || model('Payment', this.schema);
  }

  // Adicionar novo pagamento
  public async create(payment: IPayment): Promise<IPayment> {
    return this.model.create({ ...payment, status: PaymentStatus.concluded }); // adicionando o status de concluido
  }

  // Buscar por todos
  public async findAll(): Promise<IPayment[]> {
    return this.model.find();
  }

  // Buscar por chave
  public async findKey(key: string): Promise<IPayment[]> {
    return this.model.find({ key });
  }

  // Alterando pagamento(update de informações)
  public async updatePayment(id: string, paymentUpdate: Partial<IPayment>) { // Partial(parcial): siginifica que serão enviados apenas alguns atributos de IPayment, pois não tem necessidade de enviar todoso os atributos
    // Put -> atualiza todos os elementos
    // Patch -> atualiza apenas alguns elementos
    return this.model.findByIdAndUpdate(
      { _id: id }, // buscando pelo id
      { ...paymentUpdate } as UpdateQuery<IPayment>, // findByIdAnUpdate -> busca o elemento e faz a atualização
      { new: true }, // retornar o documento que foi atualizado
    ); 
  }
}

export default PaymentODM;
