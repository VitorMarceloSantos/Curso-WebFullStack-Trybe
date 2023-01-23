import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './teamsModel';

class Matche extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoal: number;
  declare inProgress: boolean;
}

Matche.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: true,
    field: 'home_team_goals',
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  awayTeamGoal: {
    type: INTEGER,
    allowNull: true,
    field: 'away_team_goals',
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matche.hasMany(Team, { foreignKey: 'id', as: 'teamHome' });
Matche.hasMany(Team, { foreignKey: 'id', as: 'teamAway' });

Team.belongsTo(Matche, { foreignKey: 'id', as: 'teamHome' });
Team.belongsTo(Matche, { foreignKey: 'id', as: 'teamAway' });

export default Matche;
