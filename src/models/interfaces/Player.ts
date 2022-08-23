import { IChampion } from './Champion';

export interface IPlayer {
  champion: IChampion;
  summonerId: string;
  summonerName: string;
}
