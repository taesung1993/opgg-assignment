import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getSummonerInQueryFn } from '../controllers/summonerController';
import { ISummoner } from '../models/interfaces/Summoner';
import States from '../states';

export const useSummoner = (name: string) => {
  const setProfile = useSetRecoilState(States.SummonerProfile);
  useEffect(() => {
    setProfile({
      status: 'loading',
      data: null
    });
  }, []);

  return useQuery<ISummoner, Error>(['summoner', name], getSummonerInQueryFn, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      setProfile({
        status: 'success',
        data
      });
    },
    onError: (err) => {
      setProfile({
        status: 'error',
        data: err.message
      });
    }
  });
};
