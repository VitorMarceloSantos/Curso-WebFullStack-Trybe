// import { IMatchReturn } from '../interfaces/match';
import Team from '../database/models/teamsModel';
import matchesModel from '../database/models/matchesModel';
// : Promise<IMatchReturn>
const searchMatches = async () => {
  const matches = await matchesModel.findAll({
    include: [
      { model: Team, as: 'homeTeam', attributes: ['teamName'] },
      { model: Team, as: 'awayTeam', attributes: ['teamName'] }] });

  if (!matches) return { status: 401, message: 'Matches not found' };

  return { status: 200, message: matches };
};

const searchMatchesProgress = async (inProgress: string | undefined | string[] | any | boolean) => { // corrigir essa linha
  const matchesProgress = await matchesModel.findAll({ where: { inProgress },
    include: [
      { model: Team, as: 'homeTeam', attributes: ['teamName'] },
      { model: Team, as: 'awayTeam', attributes: ['teamName'] }] });

  if (!matchesProgress) return { status: 401, message: 'Matches not found' };

  return { status: 200, message: matchesProgress };
};

export default { searchMatches, searchMatchesProgress };
