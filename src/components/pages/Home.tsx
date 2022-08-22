import Templates from '../templates';
import Organisms from '../organisms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import States from '../../states';
import { useQueries } from 'react-query';
import {
  getMostInfo,
  getSummonerInQueryFn
} from '../../controllers/summonerController';
import { ISummoner } from '../../models/interfaces/Summoner';
import { IMostInfo } from '../../models/interfaces/MostInfo';
import { IChampion } from '../../models/interfaces/Champion';
import { IChampionWinRate } from '../../models/interfaces/ChampionWinRate';

export default function Home() {
  const setProfile = useSetRecoilState(States.SummonerProfile);
  const setMostInfo = useSetRecoilState(States.MostInfo);
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
      queryKey: ['mostInfo', summonerName],
      queryFn: getMostInfo,
      refetchOnWindowFocus: false,
      onSuccess: (data: IMostInfo) => {
        setMostInfo({
          status: 'success',
          data: {
            ...data,
            champions: data.champions.sort(sortChampions),
            recentWinRate: data.recentWinRate.sort(sortRecentWinRate)
          }
        });
      },
      onError: (err: any) => {
        setMostInfo({
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

function sortChampions(championA: IChampion, championB: IChampion): number {
  const { games: gamesA } = championA;
  const { games: gamesB } = championB;

  if (gamesA > gamesB) {
    return -1;
  }
  if (gamesA === gamesB) {
    return 0;
  }
  return 1;
}

function sortRecentWinRate(
  recentWinRateA: IChampionWinRate,
  recentWinRateB: IChampionWinRate
) {
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
}
