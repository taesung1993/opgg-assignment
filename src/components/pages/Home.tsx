import Templates from '../templates';
import Organisms from '../organisms';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import States from '../../states';
import { getSummonerInQueryFn } from '../../controllers/summonerController';
import { ISummoner } from '../../models/interfaces/Summoner';

export default function Home() {
  const summonerName = useRecoilValue(States.SummonerName);
  const _ = useQuery(['summoner', summonerName], getSummonerInQueryFn, {
    refetchOnWindowFocus: false,
    suspense: true
  });

  return (
    <Templates.Nested>
      <Organisms.Main />
    </Templates.Nested>
  );
}
