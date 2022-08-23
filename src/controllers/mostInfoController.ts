import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { IChampion } from '../models/interfaces/Champion';
import { IChampionWinRate } from '../models/interfaces/ChampionWinRate';
import { IMostInfo } from '../models/interfaces/MostInfo';

export const getMostInfo = async ({
  queryKey
}: QueryFunctionContext): Promise<IMostInfo> => {
  const [_, name] = queryKey;
  const API_URL = `https://codingtest.op.gg/api/summoner/${name}/mostInfo?hl=ko`;

  try {
    const { data } = await axios.get<IMostInfo>(API_URL);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

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
