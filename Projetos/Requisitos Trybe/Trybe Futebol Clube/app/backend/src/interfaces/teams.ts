interface ITeams {
  id: number;
  teamName: string;
}

interface ITeamsReturn {
  status: number;
  message?: (ITeams[] | string | ITeams);
}

export { ITeams, ITeamsReturn };
