import { useQuery } from 'react-query';
import { getSummonerInQueryFn } from '../controllers/summonerController';
import { ISummoner } from '../models/interfaces/Summoner';

export const useSummoner = (name: string) => {
  return useQuery<ISummoner, Error>(['summoner', name], getSummonerInQueryFn, {
    refetchOnWindowFocus: false,
    suspense: true
  });
};
