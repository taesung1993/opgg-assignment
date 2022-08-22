import { IChampion } from './Champion';
import { IChampionWinRate } from './ChampionWinRate';

export interface IMostInfo {
  champions: IChampion[];
  recentWinRate: IChampionWinRate[];
}
