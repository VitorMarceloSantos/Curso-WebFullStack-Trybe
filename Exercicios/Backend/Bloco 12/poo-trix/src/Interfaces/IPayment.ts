interface IPayment {
  id?: string
  payByPerson: string;
  payToPerson: string;
  amount: number;
  key: string;
  status?: number;
}

export default IPayment;
