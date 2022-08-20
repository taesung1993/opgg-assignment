import { type } from 'os';
import { QueryKey, useQueryClient } from 'react-query';
import { ISummoner } from '../../models/interfaces/Summoner';

export default function Profile() {
  const client = useQueryClient();
  const quries: [QueryKey, ISummoner][] = client.getQueriesData('summoner');
  const [_, summoner] = quries.slice(-1)[0];
  console.log(summoner.profileBorderImageUrl);

  return (
    <section className='border-b border-b-[#d8d8d8] pb-3.5 pt-[0.9375rem]'>
      <section className='w-full max-w-opgg mx-auto px-4'>
        <ul className='flex items-center pl-2.5 mb-2.5'>
          {summoner.previousTiers.map((tier) => (
            <li
              key={`s-${tier.season}`}
              className='group bg-greyish-three h-5 px-[0.3125rem] pt-1 pb-[0.1875rem] border border-border text-xs text-[#657070] flex items-center justify-center rounded-sm relative cursor-pointer mx-[0.4375rem]'>
              <span className='font-bold'>S{tier.season}</span>
              &nbsp;
              <span>{tier.tier}</span>
              <div className='absolute bottom-full mb-3 hidden group-hover:flex group-hover:flex-col'>
                <div className='relative text-white bg-black whitespace-nowrap z-10 p-4'>
                  <div>{tier.string}</div>
                  <div className='absolute -z-10 w-3 h-3 bg-black rotate-45 -bottom-[6px] left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <section className='flex'>
          <div
            className={
              'relative w-[7.5rem] h-[7.5rem] flex justify-center items-center mr-[1.0625rem]'
            }>
            <img
              src={summoner.profileBorderImageUrl}
              alt={`${summoner.name}'s border images`}
              className='absolute top-0 left-0 w-[7.5rem] h-[7.5rem]'
            />
            <div className='profile w-[6.25rem] h-[6.25rem] relative'>
              <img
                src={summoner.profileImageUrl}
                alt={`${summoner.name}'s images`}
                className='absolute top-0 left-0 w-full h-full'
              />
              <div className='absolute left-1/2 -bottom-[0.75rem] -translate-x-1/2 flex justify-center z-10'>
                <div className='realtive border-y-[0.75rem] border-y-[transparent] border-r-[0.625rem] border-r-[#2c3548] after:content-[""] after:absolute after:top-0 after:-left-[1px] after:border-y-[0.75rem] after:border-y-[transparent] after:border-r-[0.625rem] after:border-r-[#eabd56] after:-z-10'></div>
                <div className='relative w-6 h-6 flex items-center justify-center bg-[#2c3548] text-[#eabd56] text-sm border border-[#eabd56] border-x-0 -mx-[1px]'>
                  {summoner.level}
                </div>
                <div className='relative border-y-[0.75rem] border-y-[transparent] border-l-[0.625rem] border-l-[#2c3548]  before:content-[""] before:absolute before:bottom-[-0.75rem] before:-right-[1px] before:border-y-[0.75rem] before:border-y-[transparent] before:border-l-[0.625rem] before:border-l-[#eabd56] before:-z-10'></div>
              </div>
            </div>
          </div>
          <div className='mt-[1.0625rem]'>
            <h1 className='text-[#242929] text-xl font-bold'>
              {summoner.name}
            </h1>
            <div className='text-[#657070] text-xs'>
              <span>레더 랭킹&nbsp;</span>
              <span>
                <strong>{summoner.ladderRank.rank.toLocaleString()}</strong>위
              </span>
              <span>&nbsp;(상위 {summoner.ladderRank.rankPercentOfTop}%)</span>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
