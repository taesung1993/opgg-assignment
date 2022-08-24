import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { IGame } from '../models/interfaces/Game';
import { IMatches } from '../models/interfaces/Matches';

export const getMatchesInQueryFn = async ({
  queryKey
}: QueryFunctionContext): Promise<IMatches> => {
  const [_, name] = queryKey;
  const API_URL = `https://codingtest.op.gg/api/summoner/${name}/matches?hl=ko`;

  try {
    const { data } = await axios.get<IMatches>(API_URL);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const filterGames = (
  id: 'all' | 'solRank' | 'freeRank',
  games: IGame[]
) => {
  if (id === 'all') {
    return games;
  }
  const type = id === 'solRank' ? '솔랭' : '자유 5:5 랭크';
  return games.filter((g) => g.gameType === type);
};

export const getChampionWinRate = (wins: number, losses: number): number => {
  const total = wins + losses;
  return Math.floor((wins / total) * 100);
};

export const getMatchedRecords = (wins: number, lossses: number) => {
  const total = wins + lossses;
  return `${total}전 ${wins}승 ${lossses}패`;
};

export const getKda = (kills: number, deaths: number, assists: number) => {
  return `${(kills / 10).toFixed(1)} / ${(deaths / 10).toFixed(1)} / ${(
    assists / 10
  ).toFixed(1)}`;
};

export const getAverage = (kills: number, deaths: number, assists: number) => {
  const result = ((kills + assists) / deaths).toFixed(2);
  return result;
};

export const getTeam = async (gameId: string) => {
  try {
    const { data } = await axios.get(
      `https://codingtest.op.gg/api/summoner/Hide%20on%20bush/matchDetail/${gameId}?hl=ko`
    );
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const getColorInAverage = (average: number) => {
  if (average > 5) {
    return '#e19205';
  }

  if (average > 4) {
    return '#1f8ecd';
  }

  if (average > 3) {
    return '#2daf7f';
  }

  return '#879292';
};

export const getColorInWinsRate = (winsRate: number) => {
  if (winsRate > 60) {
    return '#c6443e';
  }

  return '#5e5e5e';
};
