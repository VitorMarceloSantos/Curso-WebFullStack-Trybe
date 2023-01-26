interface IMach {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
}

interface IMachComplete extends IMach{
  homeTeam: {
    teamName: string
  },
  awayTeam: {
    teamName: string
  }
}

interface IMatchReturn {
  status: number,
  message: IMachComplete[] | string
}

export { IMach, IMachComplete, IMatchReturn };
