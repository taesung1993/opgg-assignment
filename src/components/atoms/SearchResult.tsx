import { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { recordSummonerInLocal } from '../../controllers/recordSummoner';
import { ISummoner } from '../../models/interfaces/Summoner';
import States from '../../states';

interface Props {
  summoners: ISummoner[];
}

export default function SearchResult({ summoners }: Props) {
  const data = summoners || [];
  const keyword = useRecoilValue(States.SearchKeyword);
  const onClick = useCallback((summoner: ISummoner) => {
    recordSummonerInLocal(summoner, 'latest');
  }, []);

  return (
    <ul className='bg-white'>
      {data.map((s, index) => (
        <li
          key={`s-${index}`}
          className='py-1.5 px-4 h-[3.3125rem] overflow-hidden hover:bg-blue-50 cursor-pointer'
          onClick={() => onClick(s)}>
          <section className='flex items-center'>
            <div className='icon min-w-[2.25rem] mr-3.5'>
              {s?.profileImageUrl ? (
                <img
                  className='w-9 h-9 rounded-full'
                  src={s.profileImageUrl}
                  alt={`${s.name}'s profile`}
                />
              ) : (
                <div className='w-9 h-9 bg-black rounded-full'></div>
              )}
            </div>
            <div className='info overflow-hidden'>
              <div className='text-sm text-[#44515c]'>
                {s.name && s.name.split(keyword)[0]}
                <span className='text-blue-500'>{keyword}</span>
                {s.name && s.name.split(keyword)[1]}
              </div>
              <div className='text-xs text-[#666666]'>Level {s.level}</div>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
}
