import { Request, Response, NextFunction } from 'express';
import { IMachComplete } from '../interfaces/match';
import matchesService from '../services/matchesService';

// const matchesMock = [
//   {
//     id: 1,
//     homeTeamId: 16,
//     homeTeamGoals: 1,
//     awayTeamId: 8,
//     awayTeamGoals: 1,
//     inProgress: false,
//     homeTeam: {
//       teamName: 'São Paulo',
//     },
//     awayTeam: {
//       teamName: 'Grêmio',
//     },
//   },
//   {
//     id: 2,
//     homeTeamId: 9,
//     homeTeamGoals: 1,
//     awayTeamId: 14,
//     awayTeamGoals: 1,
//     inProgress: false,
//     homeTeam: {
//       teamName: 'Internacional',
//     },
//     awayTeam: {
//       teamName: 'Santos',
//     },
//   },
//   {
//     id: 3,
//     homeTeamId: 4,
//     homeTeamGoals: 3,
//     awayTeamId: 11,
//     awayTeamGoals: 0,
//     inProgress: false,
//     homeTeam: {
//       teamName: 'Corinthians',
//     },
//     awayTeam: {
//       teamName: 'Napoli-SC',
//     },
//   },
//   {
//     id: 4,
//     homeTeamId: 3,
//     homeTeamGoals: 0,
//     awayTeamId: 2,
//     awayTeamGoals: 2,
//     inProgress: false,
//     homeTeam: {
//       teamName: 'Botafogo',
//     },
//     awayTeam: {
//       teamName: 'Bahia',
//     },
//   },
// ];

interface ILeaderBoard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string,
  addPointsVictory(): void,
  addPointsDraw(): void,
  addGames(): void,
  addTotalVictories(): void,
  addTotalDraws(): void,
  addTotalLosses(): void,
  addGoalsFavor(goals: number): void,
  addGoalsOwn(goals: number): void,
  resultGoalsBalance(): void,
  resultEfficiency(): void,
}

class Team implements ILeaderBoard {
  public name: string;
  public totalPoints = 0;
  public totalGames = 0;
  public totalVictories = 0;
  public totalDraws = 0;
  public totalLosses = 0;
  public goalsFavor = 0;
  public goalsOwn = 0;
  public goalsBalance = 0;
  public efficiency = '';

  constructor(nameTeam: string) {
    this.name = nameTeam;
  }

  public addPointsVictory() {
    this.totalPoints += 3;
  }

  public addPointsDraw() {
    this.totalPoints += 1;
  }

  public addGames() {
    this.totalGames += 1;
  }

  public addTotalVictories() {
    this.totalVictories += 1;
  }

  public addTotalDraws() {
    this.totalDraws += 1;
  }

  public addTotalLosses() {
    this.totalLosses += 1;
  }

  public addGoalsFavor(goals: number) {
    this.goalsFavor += goals;
  }

  public addGoalsOwn(goals: number) {
    this.goalsOwn += goals;
  }

  public resultGoalsBalance() {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  public resultEfficiency() {
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }
}

// Criação dos objetos
function createNewObject(arrayMatches: ILeaderBoard[], match:IMachComplete) {
  if ((arrayMatches.filter((team) => match.homeTeam.teamName === team.name)).length === 0) { // verifica se já exite
    arrayMatches.push(new Team(match.homeTeam.teamName));
  }
  if ((arrayMatches.filter((team) => match.awayTeam.teamName === team.name)).length === 0) { // verifica se já exite
    arrayMatches.push(new Team(match.awayTeam.teamName));
  }
}

// Atribuindo Resultados
function addFunctions(teamObject: ILeaderBoard, goalsFavor: number, goalsOwn: number) {
  teamObject.addGames();
  teamObject.addGoalsFavor(goalsFavor);
  teamObject.addGoalsOwn(goalsOwn);
  teamObject.resultGoalsBalance();
  teamObject.resultEfficiency();
}

function addFunctionsVictory(teamObject: ILeaderBoard, goalsFavor: number, goalsOwn: number) {
  teamObject.addPointsVictory();
  teamObject.addTotalVictories();

  addFunctions(teamObject, goalsFavor, goalsOwn); // Adicionando as propriedades iguais
}

function addFunctionsLosses(teamObject: ILeaderBoard, goalsFavor: number, goalsOwn: number) {
  teamObject.addTotalLosses();

  addFunctions(teamObject, goalsFavor, goalsOwn); // Adicionando as propriedades iguais
}

function addFunctionsDraw(
  homeObject: ILeaderBoard,
  awayObject: ILeaderBoard,
  match: IMachComplete,
) {
  homeObject.addPointsDraw();
  awayObject.addPointsDraw();

  homeObject.addTotalDraws();
  awayObject.addTotalDraws();

  addFunctions(homeObject, match.homeTeamGoals, match.awayTeamGoals); // Adicionando - teamHome
  addFunctions(awayObject, match.awayTeamGoals, match.homeTeamGoals); // Adicionando - teamAway
}

function homeVictory(arrayMatches: ILeaderBoard[], match: IMachComplete) {
  const objectHome = arrayMatches.filter((team) => match.homeTeam.teamName === team.name)[0];
  addFunctionsVictory(objectHome, match.homeTeamGoals, match.awayTeamGoals); // Adicinando resultados
  const objectAway = arrayMatches.filter((team) => match.awayTeam.teamName === team.name)[0];
  addFunctionsLosses(objectAway, match.awayTeamGoals, match.homeTeamGoals); // Adicinando resultados
}

function awayVictory(arrayMatches: ILeaderBoard[], match: IMachComplete) {
  const objectAway = arrayMatches.filter((team) => match.awayTeam.teamName === team.name)[0];
  addFunctionsVictory(objectAway, match.awayTeamGoals, match.homeTeamGoals); // Adicinando resultados
  const objectHome = arrayMatches.filter((team) => match.homeTeam.teamName === team.name)[0];
  addFunctionsLosses(objectHome, match.homeTeamGoals, match.awayTeamGoals); // Adicinando resultados
}

function gameDraw(arrayMatches: ILeaderBoard[], match: IMachComplete) {
  const objectHome = arrayMatches.filter((team) => match.homeTeam.teamName === team.name)[0];
  const objectAway = arrayMatches.filter((team) => match.awayTeam.teamName === team.name)[0];
  addFunctionsDraw(objectHome, objectAway, match); // Adicinando resultados
}

// type IMatchType = {
//   id: number,
//   homeTeamId: number,
//   homeTeamGoals: number,
//   awayTeamId: number,
//   awayTeamGoals: number,
//   inProgress: boolean,
//   homeTeam: {
//     teamName: string,
//   },
//   awayTeam: {
//     teamName: string,
//   },
// };

export default async function separateMacthes(req: Request, res: Response, next: NextFunction) {
  const arrayMatches: ILeaderBoard[] = [];
  const { message } = await matchesService.searchMatchesProgress(false); // partidas encerradas
  const matchResult = message as unknown as IMachComplete[];
  // return res.status(200).json(matchResult);
  matchResult.forEach((match) => {
    // Criando objetos caso não existam
    createNewObject(arrayMatches, match);

    // Atribuindo resultados
    if (match.homeTeamGoals > match.awayTeamGoals) { // teamHome vencedor
      homeVictory(arrayMatches, match);
    }
    if (match.homeTeamGoals < match.awayTeamGoals) { // teamAway vencedor
      awayVictory(arrayMatches, match);
    }
    if (match.homeTeamGoals === match.awayTeamGoals) { // Empate
      gameDraw(arrayMatches, match);
    }
  });
  return res.status(200).json(arrayMatches); // Testando a saída
  next();
}
