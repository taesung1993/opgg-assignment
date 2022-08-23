import { IChampion } from './Champion';
import { IItem } from './Item';
import { ISpell } from './Spell';
import { IStats } from './Stats';

export interface IGame {
  mmr: number;
  champion: IChampion;
  spells: ISpell[];
  items: IItem[];
  needRenew: boolean;
  gameId: string;
  createDate: number;
  gameLength: number;
  gameType: string;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
  stats: IStats;
  mapInfo: any;
  peak: string[];
  isWin: boolean;
}
