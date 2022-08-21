import Templates from '../templates';
import Organisms from '../organisms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import States from '../../states';
import { useQueries } from 'react-query';
import {
  getGameWinsRateInQueryFn,
  getSummonerInQueryFn
} from '../../controllers/summonerController';
import { ISummoner } from '../../models/interfaces/Summoner';
import { AxiosError } from 'axios';
import { IGameWinsRate } from '../../models/interfaces/GameWinsRate';

export default function Home() {
  const setProfile = useSetRecoilState(States.SummonerProfile);
  const setGameWinsRate = useSetRecoilState(States.GameWinsRate);
  const summonerName = useRecoilValue(States.SummonerName);

  useQueries([
    {
      queryKey: ['summoner', summonerName],
      queryFn: getSummonerInQueryFn,
      refetchOnWindowFocus: false,
      onSuccess: (data: ISummoner) => {
        setProfile({
          status: 'success',
          data
        });
      },
      onError: (err: any) => {
        setProfile({
          status: 'error',
          data: err.message
        });
      }
    },
    {
      queryKey: ['gameWinsRate', summonerName],
      queryFn: getGameWinsRateInQueryFn,
      refetchOnWindowFocus: false,
      onSuccess: (data: IGameWinsRate) => {
        setGameWinsRate({
          status: 'success',
          data
        });
      },
      onError: (err: any) => {
        setGameWinsRate({
          status: 'error',
          data: err.message
        });
      }
    }
  ]);

  return (
    <Templates.Nested>
      <Organisms.Main />
    </Templates.Nested>
  );
}
