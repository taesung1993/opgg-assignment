import { useMemo } from 'react';
import { IChampionWinRate } from '../../models/interfaces/ChampionWinRate';

interface Props {
  championWinRate: IChampionWinRate;
}

export default function RecentWinRateItem({
  championWinRate: { wins, losses, imageUrl, name }
}: Props) {
  const winRrate = useMemo(() => {
    const total = wins + losses;
    return Math.floor((wins / total) * 100);
  }, [wins, losses]);

  return (
    <li
      className='h-12 py-2 pl-[0.9375rem] pr-2 flex items-center border-b border-b-[#cdd2d2] last:border-b-0'
      role='recent-winRate-item'>
      <div className='w-8 h-8 rounded-full overflow-hidden mr-2.5'>
        <img className='w-full h-full' src={imageUrl} alt={`${name}'s image`} />
      </div>
      <div className='text-[0.8125rem] font-bold w-16 overflow-hidden whitespace-nowrap text-ellipsis font-apple'>
        {name}
      </div>

      <div className='text-[0.8125rem] font-bold text-[#879292] mr-3'>
        {winRrate}%
      </div>
      <div className='w-[8.4375rem] h-6 rounded-[0.25rem] flex items-center overflow-hidden'>
        <div
          className='h-full bg-[#1f8ecd] text-white text-[0.75rem] flex items-center justify-start pl-1 whitespace-nowrap font-bold'
          style={{
            width: `${winRrate}%`,
            minWidth: '1.875rem'
          }}>
          <span>{wins}</span>
          <span className='font-apple leading-[0.6875rem] mt-[1px] mr-2'>
            승
          </span>
        </div>
        <div
          className='h-full bg-[#ee5a52] text-white text-xs flex items-center justify-end pr-1 whitespace-nowrap font-bold'
          style={{
            width: `${100 - winRrate}%`,
            minWidth: '1.875rem'
          }}>
          <span>{losses}</span>
          <span className='font-apple leading-[0.6875rem] mt-[1px]'>패</span>
        </div>
      </div>
    </li>
  );
}
