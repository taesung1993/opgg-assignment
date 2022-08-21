import Molecules from './index';
import { AsyncData } from '../../models/interfaces/AsyncData';
import { IGameWinsRate } from '../../models/interfaces/GameWinsRate';

type GameWinsRate = AsyncData<IGameWinsRate>;

interface Props {
  gameWinsRate: GameWinsRate;
  selectedTabItem: {
    id: string;
    title: string;
  };
}

export default function WinRatesContent({
  gameWinsRate,
  selectedTabItem
}: Props) {
  const { status, data } = gameWinsRate;

  if (status === 'loading') {
    return <div></div>;
  }

  if (status === 'error') {
    return <div>error</div>;
  }

  const { champions, recentWinRate } = data;
  const { id: selectedTabId } = selectedTabItem;

  return (
    <>
      {selectedTabId === 'champions' ? (
        <Molecules.Champions champions={champions} />
      ) : (
        <Molecules.RecentWinRates recentWinRates={recentWinRate} />
      )}
    </>
  );
}
