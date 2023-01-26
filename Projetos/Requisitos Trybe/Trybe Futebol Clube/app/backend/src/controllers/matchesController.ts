import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

// Converte em boolean
const progressBoolean = (value: any) => {
  let valueBoolean = false;
  switch (value) {
    case 'true':
      valueBoolean = true;
      break;
    case 'false':
      valueBoolean = false;
      break;
    default:
      console.log('String not converted');
  }
  return valueBoolean;
};

async function returnSearch(inProgress: any) {
  // verifca a existencia de inProgress
  if (inProgress && ['true', 'false'].includes(inProgress)) { // aceita apenas as string['true', 'false'] para transformar em boolean
    const { status, message } = await matchesService
      .searchMatchesProgress(progressBoolean(inProgress));
    return { status, message };
  }
  // caso não tenha passado o query como parâmetro, vai para outra rota
  const { status, message } = await matchesService.searchMatches();
  return { status, message };
}

const searchMatches = async (req: Request, res: Response) => {
  const { inProgress } = req.query; // recebendo via query
  const { status, message } = await returnSearch(inProgress);

  return status === 200
    ? res.status(status).json(message)
    : res.status(status).json({ message });
};

export default { searchMatches };
