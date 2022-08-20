import { ITierRank } from './TierRank';

export interface ILeague {
  hasResults: boolean;
  wins: number;
  losses: number;
  tierRank: ITierRank;
}
