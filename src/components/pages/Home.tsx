import Templates from '../templates';
import Organisms from '../organisms';
import { useRecoilValue } from 'recoil';
import States from '../../states';
import { useSummoner } from '../../hooks/useSummoner';

export default function Home() {
  const summonerName = useRecoilValue(States.SummonerName);
  const _ = useSummoner(summonerName);

  return (
    <Templates.Nested>
      <Organisms.Main />
    </Templates.Nested>
  );
}
