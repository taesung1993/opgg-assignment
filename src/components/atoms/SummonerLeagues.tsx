import { AsyncData } from '../../models/interfaces/AsyncData';
import { ILeague } from '../../models/interfaces/League';

export default function SummonerLeagues({
  status,
  data
}: AsyncData<ILeague[]>) {
  if (status === 'loading') {
    return <Skeleton />;
  }

  if (status === 'error') {
    return <></>;
  }

  const [solRank, freeRank] = data;
  const calculateWinRate = (wins: number, losses: number) => {
    const total = wins + losses;
    const percent = Math.floor((wins / total) * 100);
    return percent;
  };

  return (
    <ul className='flex flex-col'>
      <li className='flex items-center px-2 py-2.5 border border-[#cdd2d2] bg-[#f2f2f2] mb-2'>
        <div className='w-[6.5rem] h-[6.5rem] mr-2'>
          <img src={solRank.tierRank.imageUrl} alt='solo rank' />
        </div>
        <div>
          <div className='h-[0.8125rem] text-[0.6875rem] text-[#879292] mb-1'>
            솔로 랭크
          </div>
          <div
            className='text-xs text-[#353a3a] h-[0.9375rem] mb-1 leading-[15px]'
            role='solRank-total-games'>
            <strong>탑</strong> (총{' '}
            {(solRank.wins + solRank.losses).toLocaleString()} 게임)
          </div>
          <div
            className='text-[0.9375rem] text-[#1f8ecd] font-bold mb-1.5'
            role='solRank-tier-division'>
            {solRank.tierRank.tierDivision}
          </div>
          <div className='flex items-center mb-[0.1875rem]'>
            <span
              className='font-bold text-xs text-[#555e5e]'
              role='solRank-tier-lp'>
              {solRank.tierRank.lp.toLocaleString()} LP
            </span>
            <span className='text-xs text-[#879292]' role='solRank-game-totals'>
              &nbsp;/ {solRank.wins}승 {solRank.losses}패
            </span>
          </div>
          <div
            className='h-[0.9375rem] text-xs text-[#879292]'
            role='solRank-wins-rate'>
            승률 {calculateWinRate(solRank.wins, solRank.losses)}%
          </div>
        </div>
      </li>

      <li className='flex items-center px-7 py-[1.0625rem] border border-[#cdd2d2] bg-[#f2f2f2]'>
        <div className='w-16 h-16 mr-7'>
          <img src={freeRank.tierRank.imageUrl} alt='free rank' />
        </div>
        <div>
          <div className='h-[0.8125rem] text-[0.6875rem] text-[#879292]'>
            자유 5:5 랭크
          </div>
          <div
            className='text-[0.8125rem] text-[#1f8ecd] font-bold'
            role='free-tier-division'>
            {freeRank.tierRank.tierDivision}
          </div>
          <div className='flex items-center'>
            <span
              className='font-bold text-xs text-[#555e5e]'
              role='freeRank-tier-lp'>
              {freeRank.tierRank.lp.toLocaleString()} LP
            </span>
            <span
              className='text-xs text-[#879292]'
              role='freeRank-game-totals'>
              &nbsp;/ {freeRank.wins}승 {freeRank.losses}패
            </span>
          </div>
          <div
            className='h-[0.9375rem] text-xs text-[#879292]'
            role='freeRank-wins-rate'>
            승률 {calculateWinRate(freeRank.wins, freeRank.losses)}%
          </div>
        </div>
      </li>
    </ul>
  );
}

function Skeleton() {
  return (
    <ul className='flex flex-col gap-2'>
      <li
        role='league-skeleton'
        className='flex items-center px-2 py-2.5 border border-[#cdd2d2] bg-[#f2f2f2]'>
        <div className='skeleton w-[6.5rem] h-[6.5rem] mr-2'></div>
        <div>
          <div className='skeleton w-[2.5625rem] h-[0.8125rem] mb-1'></div>
          <div className='skeleton w-[4.3125rem] h-[0.9375rem] mb-1'></div>
          <div className='skeleton w-[4.75rem] h-[0.8125rem] mb-1.5'></div>
          <div className='skeleton w-[5.8125rem] h-[0.9375rem] mb-[0.1875rem]'></div>
          <div className='skeleton w-[3.0625rem] h-[0.9375rem]'></div>
        </div>
      </li>
      <li
        role='league-skeleton'
        className='flex items-center px-7 py-[1.0625rem] border border-[#cdd2d2] bg-[#f2f2f2]'>
        <div className='skeleton w-16 h-16 mr-7'></div>
        <div>
          <div className='skeleton w-[3.75rem] h-[0.8125rem] mb-0.5'></div>
          <div className='skeleton w-[3.75rem] h-[0.8125rem]'></div>
        </div>
      </li>
    </ul>
  );
}
