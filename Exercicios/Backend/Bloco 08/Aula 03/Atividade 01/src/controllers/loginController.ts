// Cria um token para os demais midlewares

import { Request, Response } from 'express';
import {config, secret} from '../Token/jwtConfig';
import * as usersService from '../services/usersService';
const jwt =  require('jsonwebtoken');

export async function loginUser(req: Request, res: Response) {
  try{
    const { email, password } = req.body;
    if(!(email && password)) { // verifica se o email ou senha não estão vazios
      return res.status(401).json({ message: 'Campos obrigatórios: Email / Password' });
    }

    const {status, message, users} = await usersService.getByEmail(email);
    if(!users || users.password !== password) { // verifica se existe o usuario e se o password é verdadeiro
      return res.status(status).json(message);
    }
    const { password: _password, ...usersWithoutPassword} = users; // utiliza a descontrucao para pegar o user sem o password, o restante é é coloca na variavel usersWithoutPassword(rest)(Obs: renomeando o password para _password)

    const token = jwt.sign({usersWithoutPassword}, secret, config) // gerando o token

    return res.status(200).json({token});
  }catch (err: any) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
}
