// Criando um objeto com os parâmetros recebidos da requisição
import { Request } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';

function createMotorcycle(
  req: Request,
) {
  const motoParams: IMotorcycle = {
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    status: req.body.status || false,
    buyValue: req.body.buyValue,
    category: req.body.category,
    engineCapacity: req.body.engineCapacity,
  };
  return motoParams;
}

export default createMotorcycle;