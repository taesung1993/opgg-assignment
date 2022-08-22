import { IChampion } from '../models/interfaces/Champion';
import { IChampionWinRate } from '../models/interfaces/ChampionWinRate';

export const sortChampions = (
  championA: IChampion,
  championB: IChampion
): number => {
  const { games: gamesA } = championA;
  const { games: gamesB } = championB;

  if (gamesA > gamesB) {
    return -1;
  }
  if (gamesA === gamesB) {
    return 0;
  }
  return 1;
};

export const sortChampionWinRate = (
  recentWinRateA: IChampionWinRate,
  recentWinRateB: IChampionWinRate
) => {
  const { wins: winsA, losses: lossesA } = recentWinRateA;
  const { wins: winsB, losses: lossesB } = recentWinRateB;

  const totalA = winsA + lossesA;
  const totalB = winsB + lossesB;

  if (totalA > totalB) {
    return -1;
  }
  if (totalA === totalB) {
    return 0;
  }
  return 1;
};
