import axios from 'axios';
import { QueryFunctionContext } from 'react-query';
import { IGameWinsRate } from '../models/interfaces/GameWinsRate';
import { ISummoner } from '../models/interfaces/Summoner';

export const getSummoner = async (name: string) => {
  const API_URL = `https://codingtest.op.gg/api/summoner/${name}?hl=ko`;
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const getSummonerInQueryFn = async ({
  queryKey
}: QueryFunctionContext): Promise<ISummoner> => {
  const [_, name] = queryKey;
  try {
    const { data } = await axios.get<{ summoner: ISummoner }>(
      `https://codingtest.op.gg/api/summoner/${name}?hl=ko`
    );
    return data.summoner;
  } catch (err: any) {
    throw new Error('소환사 정보를 불러오는데 실패하였습니다.');
  }
};

export const getGameWinsRateInQueryFn = async ({
  queryKey
}: QueryFunctionContext): Promise<IGameWinsRate> => {
  const [_, name] = queryKey;
  const API_URL = `https://codingtest.op.gg/api/summoner/${name}/mostInfo?hl=ko`;

  try {
    const { data } = await axios.get<IGameWinsRate>(API_URL);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
