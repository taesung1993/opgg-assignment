import { useMemo } from 'react';
import { IStats } from '../../models/interfaces/Stats';

interface Props {
  stats: IStats;
}

export default function ChampionKdaInMatchedList({ stats }: Props) {
  const badges = useMemo<
    { title: string; color: string; borderColor: string }[]
  >(() => {
    const result = [];
    if (stats.general.largestMultiKillString) {
      let title = stats.general.largestMultiKillString;

      if (/double/i.test(title)) {
        title = '더블킬';
      } else {
        if (/triple/i.test(title)) {
          title = '트리플킬';
        }
      }

      const item = {
        title,
        color: '#ee5a52',
        borderColor: '#bf3b36'
      };
      result.push(item);
    }

    if (stats.general.opScoreBadge) {
      const item = {
        title: stats.general.opScoreBadge,
        color: stats.general.opScoreBadge === 'ACE' ? '#8c51c5' : '#e19205',
        borderColor:
          stats.general.opScoreBadge === 'ACE' ? '#7f3590' : '#b88a2a'
      };
      result.push(item);
    }
    return result;
  }, [stats]);
  return (
    <section className='flex flex-col justify-center items-center gap-1.5 w-[5.8125rem] mr-[2.0625rem]'>
      <div>
        <span className='text-[0.9375rem] -tracking-[0.58px] text-[#555e5e] font-bold'>
          {stats.general.kill}
        </span>
        <span className='text-[0.9375rem] -tracking-[0.58px] text-[#948e8d] font-bold'>
          &nbsp;/&nbsp;
        </span>
        <span className='text-[0.9375rem] -tracking-[0.58px] text-[#d0021b] font-bold'>
          {stats.general.death}
        </span>
        <span className='text-[0.9375rem] -tracking-[0.58px] text-[#948e8d] font-bold'>
          &nbsp;/&nbsp;
        </span>
        <span className='text-[0.9375rem] -tracking-[0.58px] text-[#555e5e] font-bold'>
          {stats.general.assist}
        </span>
      </div>
      <div className='text-[0.6875rem]'>
        <span className='text-[#333333] -trancking-[0.42px] font-bold'>
          {stats.general.kdaString}
        </span>
        <span className='text-[#555e5e] -trancking-[0.42px]'>&nbsp;평점</span>
      </div>
      <div>
        <ul className='flex items-center gap-1'>
          {badges.map((badge, index) => (
            <li
              key={`badge-${index}`}
              className='py-[0.1875rem] px-[0.3125rem] h-[1.125rem] rounded-full text-[0.625rem] leading-[0.625rem] -tracking-[0.38px] text-[#fff]'
              style={{
                border: `1px solid ${badge.borderColor}`,
                backgroundColor: badge.color
              }}>
              {badge.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
