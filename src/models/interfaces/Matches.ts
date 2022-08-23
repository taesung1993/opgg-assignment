import { IChampion } from './Champion';
import { IGame } from './Game';
import { IPosition } from './Position';
import { ISummary } from './Summary';

export interface IMatches {
  champions: IChampion[];
  games: IGame[];
  positions: IPosition[];
  summary: ISummary;
}
