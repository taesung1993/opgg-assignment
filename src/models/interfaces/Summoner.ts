import { ILaddterRank } from './LadderRank';
import { ILeague } from './League';
import { IPreviousTier } from './PreviousTier';

export interface ISummoner {
  name: string;
  level: number;
  profileImageUrl: string;
  profileBorderImageUrl: string;
  url: string;
  leagues: ILeague[];
  previousTiers: IPreviousTier[];
  ladderRank: ILaddterRank;
  profileBackgroundImageUrl: string;
}
