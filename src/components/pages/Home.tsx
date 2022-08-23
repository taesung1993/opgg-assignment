import React from 'react';
import Templates from '../templates';
import Organisms from '../organisms';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import States from '../../states';
import { useQueries } from 'react-query';
import { getSummonerInQueryFn } from '../../controllers/summonerController';
import { ISummoner } from '../../models/interfaces/Summoner';
import { IMostInfo } from '../../models/interfaces/MostInfo';
import { getMatchesInQueryFn } from '../../controllers/matchesController';
import {
  getMostInfo,
  sortChampions,
  sortChampionWinRate
} from '../../controllers/mostInfoController';
import { IMatches } from '../../models/interfaces/Matches';
import { getItemsInQueryFn } from '../../controllers/itemController';
import { IItemDetail } from '../../models/interfaces/ItemDetail';

export default function Home() {
  const setProfile = useSetRecoilState(States.SummonerProfile);
  const setMostInfo = useSetRecoilState(States.MostInfo);
  const setMatches = useSetRecoilState(States.Matches);
  const setItemsDetail = useSetRecoilState(States.ItemsDetail);
  const summonerName = useRecoilValue(States.SummonerName);

  const status = useQueries([
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
      },
      notifyOnChangeProps: ['remove']
    },
    {
      queryKey: [summonerName, 'mostInfo'],
      queryFn: getMostInfo,
      refetchOnWindowFocus: false,
      onSuccess: (data: IMostInfo) => {
        setMostInfo({
          status: 'success',
          data: {
            ...data,
            champions: data.champions.sort(sortChampions),
            recentWinRate: data.recentWinRate.sort(sortChampionWinRate)
          }
        });
      },
      onError: (err: any) => {
        setMostInfo({
          status: 'error',
          data: err.message
        });
      },
      notifyOnChangeProps: ['remove']
    },
    {
      queryKey: 'itemDetail',
      queryFn: getItemsInQueryFn,
      refetchOnWindowFocus: false,
      onSuccess: (data: IItemDetail) => {
        setItemsDetail({
          status: 'success',
          data
        });
      },
      onError: (err: any) => {
        setItemsDetail({
          status: 'error',
          data: err.message
        });
      },
      notifyOnChangeProps: ['remove']
    },
    {
      queryKey: [summonerName, 'matches'],
      queryFn: getMatchesInQueryFn,
      refetchOnWindowFocus: false,
      onSuccess: (data: IMatches) => {
        setMatches({
          status: 'success',
          data
        });
      },
      onError: (err: any) => {
        setMatches({
          status: 'error',
          data: err.message
        });
      },
      notifyOnChangeProps: ['data', 'error']
    }
  ]);

  return (
    <Templates.Nested>
      <Organisms.Main />
    </Templates.Nested>
  );
}
