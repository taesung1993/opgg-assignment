import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { getGameWinsRateInQueryFn } from '../controllers/summonerController';
import { IGameWinsRate } from '../models/interfaces/GameWinsRate';
import States from '../states';

export const useGameWinsRate = (name: string) => {
  const setGameWinsRate = useSetRecoilState(States.GameWinsRate);

  useEffect(() => {
    setGameWinsRate({
      status: 'loading',
      data: null
    });
  }, []);

  return useQuery<IGameWinsRate, Error>(
    ['gameWinsRate', name],
    getGameWinsRateInQueryFn,
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        setGameWinsRate({
          status: 'success',
          data
        });
      },
      onError: (err) => {
        setGameWinsRate({
          status: 'error',
          data: err.message
        });
      }
    }
  );
};
