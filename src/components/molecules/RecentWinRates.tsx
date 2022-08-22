import { IRecentWinRate } from '../../models/interfaces/RecentWinRate';
import Atoms from '../atoms';

interface Props {
  recentWinRates: IRecentWinRate[];
}

export default function RecentWinRates({ recentWinRates }: Props) {
  return (
    <ul>
      {recentWinRates.map((winRate, index) => (
        <Atoms.RecentWinRateItem
          key={`recent-${index}`}
          recentWinRate={winRate}
        />
      ))}
    </ul>
  );
}
