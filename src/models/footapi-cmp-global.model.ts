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



/*
declare module FootApiCmpGlobal {

  export interface Self {
    href: string;
  }

  export interface Teams {
    href: string;
  }

  export interface Fixtures {
    href: string;
  }

  export interface LeagueTable {
    href: string;
  }

  export interface Links {
    self: Self;
    teams: Teams;
    fixtures: Fixtures;
    leagueTable: LeagueTable;
  }

  export interface RootObject {
    _links: Links;
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

}

*/

