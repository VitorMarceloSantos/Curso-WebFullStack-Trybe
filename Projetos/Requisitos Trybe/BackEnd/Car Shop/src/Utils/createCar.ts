// Criando um objeto com os parâmetros recebidos da requisição
import { Request } from 'express';
import ICar from '../Interfaces/ICar';

function createCar(
  req: Request,
) {
  const carParams: ICar = {
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    status: req.body.status || false,
    buyValue: req.body.buyValue,
    doorsQty: req.body.doorsQty,
    seatsQty: req.body.seatsQty,
  };
  return carParams;
}

export default createCar;