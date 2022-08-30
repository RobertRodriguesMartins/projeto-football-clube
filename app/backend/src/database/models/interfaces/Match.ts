interface IMatch {
  id?: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number | boolean;
}

type IMatchAssociation = { [k: string]: string };

export interface IMatchWithAssociations extends IMatch {
  teamHome: IMatchAssociation;
  teamAway: IMatchAssociation;
}

export default IMatch;
