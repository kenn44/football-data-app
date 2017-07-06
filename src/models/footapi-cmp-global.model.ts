export class FootApiCmpGlobal {
  links: {
    self: {
      href: string;
    };
    teams: {
      href: string;
    };
    fixtures: {
      href: string;
    };
    leagueTable: {
      href: string;
    }
  };
  id: number;
  caption: string;
  league: string;
  year: string;
  currentMatchday: number;
  numberOfMatchdays: number;
  numberOfTeams: number;
  numberOfGames: number;
  lastUpdated: Date;
}

