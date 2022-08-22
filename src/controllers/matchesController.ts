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
  gameType: '솔랭' | '일반' | '자유 5:5 랭크',
  games: IGame[]
) => {
  return games.filter((g) => g.gameType === gameType);
};
