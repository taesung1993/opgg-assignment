import { IChampion } from './Champion';
import { IRecentWinRate } from './RecentWinRate';

export interface IGameWinsRate {
  champions: IChampion[];
  recentWinRate: IRecentWinRate[];
}
