import { IChampionWinRate } from '../../models/interfaces/ChampionWinRate';
import Atoms from '../atoms';

interface Props {
  championWinRates: IChampionWinRate[];
}

export default function MostChampionWinRate({ championWinRates }: Props) {
  return (
    <ul>
      {championWinRates.map((championWinRate, index) => (
        <Atoms.RecentWinRateItem
          key={`recent-${index}`}
          championWinRate={championWinRate}
        />
      ))}
    </ul>
  );
}
