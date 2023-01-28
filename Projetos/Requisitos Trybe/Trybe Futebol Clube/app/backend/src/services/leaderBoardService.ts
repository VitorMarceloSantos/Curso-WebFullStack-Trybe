// import Team from '../database/models/teamsModel';
// import matchesModel from '../database/models/matchesModel';

const searchLeaderHome = async () => {
  // const matches = await matchesModel.findAll({
  //   include: [
  //     { model: Team, as: 'homeTeam', attributes: ['teamName'] },
  //     { model: Team, as: 'awayTeam', attributes: ['teamName'] }] });

  // if (!matches) return { status: 401, message: 'Matches not found' };

  // return { status: 200, message: matches };
};

export default { searchLeaderHome };
