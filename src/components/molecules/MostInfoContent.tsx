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

export default function MostInfoContent({
  gameWinsRate,
  selectedTabItem
}: Props) {
  const { status, data } = gameWinsRate;

  if (status === 'loading') {
    return (
      <section className='h-[20.9375rem]'>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </section>
    );
  }

  if (status === 'error') {
    return (
      <section className='h-[20.9375rem] flex justify-center pt-14'>
        <p
          className='text-xs text-center text-red-500'
          role='winRates-err-paragraph'>
          죄송합니다. 승률 정보를 불러오는데 실패하였습니다.
        </p>
      </section>
    );
  }

  const { champions, recentWinRate } = data;
  const { id: selectedTabId } = selectedTabItem;

  return (
    <section>
      {selectedTabId === 'champions' ? (
        <Molecules.Champions champions={champions} />
      ) : (
        <Molecules.RecentWinRates recentWinRates={recentWinRate} />
      )}
    </section>
  );
}

function Skeleton() {
  return (
    <div
      className='flex items-center px-4 py-1 h-[3.3125rem] border-b border-b-[#cdd2d2] last:border-b-0'
      role='win-rates-skeleton'>
      <div className='skeleton w-[2.8125rem] h-[2.8125rem] rounded-full mr-2.5'></div>
      <div className='w-[5.7rem]'>
        <h6 className='skeleton rounded-full w-12 h-[0.8125rem] mb-[0.1875rem] font-bold'></h6>
        <div className='skeleton rounded-full w-16 h-[0.6875rem]'></div>
      </div>

      <div className='w-16'>
        <h6 className='skeleton w-full  h-[0.8125rem] rounded-full mb-[0.1875rem] font-bold'></h6>
        <div className='skeleton w-full rounded-full h-[0.6875rem]'></div>
      </div>

      <div className='ml-4'>
        <h6 className='skeleton w-7 h-[0.8125rem] mb-[0.1875rem] font-bold rounded-full'></h6>
        <div className='skeleton w-8 h-[0.6875rem] rounded-full'></div>
      </div>
    </div>
  );
}
