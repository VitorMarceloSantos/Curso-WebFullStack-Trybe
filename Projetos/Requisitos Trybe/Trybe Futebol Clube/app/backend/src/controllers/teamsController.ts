import { Request, Response } from 'express';
import teamsService from '../services/teamsService';

const searchTeams = async (_req: Request, res: Response) => {
  const { status, message } = await teamsService.searchTeams();
  return status === 200
    ? res.status(status).json(message)
    : res.status(status).json({ message });
};

const searchOneTeam = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, message } = await teamsService.searchOneTeam(Number(id));
  return status === 200
    ? res.status(status).json(message)
    : res.status(status).json({ message });
};

export default { searchTeams, searchOneTeam };
