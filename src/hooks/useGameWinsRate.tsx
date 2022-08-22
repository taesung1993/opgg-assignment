import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getMostInfo } from '../controllers/summonerController';
import { IMostInfo } from '../models/interfaces/MostInfo';
import States from '../states';

export const useMostInfo = (name: string) => {
  const setMostInfo = useSetRecoilState(States.GameWinsRate);

  useEffect(() => {
    setMostInfo({
      status: 'loading',
      data: null
    });
  }, []);

  return useQuery<IMostInfo, Error>(['gameWinsRate', name], getMostInfo, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      setMostInfo({
        status: 'success',
        data
      });
    },
    onError: (err) => {
      setMostInfo({
        status: 'error',
        data: err.message
      });
    }
  });
};
