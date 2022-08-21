import Templates from '../templates';
import Organisms from '../organisms';
import { useRecoilValue } from 'recoil';
import States from '../../states';
import { useSummoner } from '../../hooks/useSummoner';
import { useGameWinsRate } from '../../hooks/useGameWinsRate';

export default function Home() {
  const summonerName = useRecoilValue(States.SummonerName);
  const _getSummoner = useSummoner(summonerName);
  const _getGameWinsRate = useGameWinsRate(summonerName);

  return (
    <Templates.Nested>
      <Organisms.Main />
    </Templates.Nested>
  );
}
