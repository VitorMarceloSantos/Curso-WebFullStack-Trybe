import { ITeamsReturn } from '../interfaces/teams';
import teamsModel from '../database/models/teamsModel';

const searchTeams = async (): Promise<ITeamsReturn> => {
  const teams = await teamsModel.findAll();

  if (!teams) return { status: 401, message: 'Teams not found' };

  return { status: 200, message: teams };
};

const searchOneTeam = async (id: number): Promise<ITeamsReturn> => {
  const team = await teamsModel.findOne({ where: { id } });

  if (!team) return { status: 401, message: 'Team not found' };

  return { status: 200, message: team };
};

export default { searchTeams, searchOneTeam };
