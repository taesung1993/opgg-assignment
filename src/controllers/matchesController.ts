import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { IMatches } from '../models/interfaces/Matches';

const getMatchesInQueryFn = async ({
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
