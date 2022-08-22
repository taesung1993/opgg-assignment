export interface IChampion {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
  games: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
  losses: number;
  cs: number;
  rank: number;
  level?: number;
}
