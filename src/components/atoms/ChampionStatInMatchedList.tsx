import { IStats } from '../../models/interfaces/Stats';

interface Props {
  level: number;
  stats: IStats;
}

export default function ChampionStatInMatchedList({ level, stats }: Props) {
  return (
    <section className='pt-[0.8125rem] text-center mr-[1.875rem]'>
      <div className='text-[0.6875rem] text-[#555e5e] -tracking-[0.42px] mb-1.5'>
        레벨 {level}
      </div>
      <div className='text-[0.6875rem] text-[#555e5e] -tracking-[0.42px] mb-1.5 whitespace-nowrap'>
        {stats.general.cs} ({stats.general.csPerMin}) CS
      </div>
      <div className='text-[0.6875rem] text-[#d0021b] -tracking-[0.42px] whitespace-nowrap'>
        킬관여 {stats.general.contributionForKillRate}
      </div>
    </section>
  );
}
