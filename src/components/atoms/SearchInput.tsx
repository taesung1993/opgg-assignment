import { useCallback, Dispatch, ChangeEvent, KeyboardEvent } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { recordSummonerInLocal } from '../../controllers/localSummonerController';
import States from '../../states';

interface Props {
  setShowSearchContainer: Dispatch<boolean>;
}

export default function SearchInput({ setShowSearchContainer }: Props) {
  const [keyword, setKeyword] = useRecoilState(States.SearchKeyword);
  const summoner = useRecoilValue(States.Summoner);
  const setSummonerName = useSetRecoilState(States.SummonerName);

  const onSearch = useCallback(async (event: ChangeEvent) => {
    let waiting = false;
    return (() => {
      if (!waiting) {
        waiting = true;
        const target = event.target as HTMLInputElement;
        const value = target.value;
        setKeyword(value);
        setTimeout(() => {
          waiting = false;
        }, 250);
      }
    })();
  }, []);

  const onKeyup = useCallback(
    (event: KeyboardEvent) => {
      let waiting = false;

      return (() => {
        if (!waiting) {
          waiting = true;
          const target = event.target as HTMLInputElement;
          if (target.value) {
            if (event.key === 'Enter') {
              if (summoner) {
                recordSummonerInLocal(summoner, 'latest');
                setSummonerName(summoner.name);
                setKeyword('');
                setShowSearchContainer(false);
              }
            }
          }
          setTimeout(() => {
            waiting = false;
          }, 250);
        }
      })();
    },
    [summoner]
  );

  const onFocus = useCallback(() => {
    setShowSearchContainer(true);
  }, []);

  return (
    <input
      type='text'
      placeholder='소환사명,챔피언…'
      className='w-full h-full text-xs font-apple focus:outline-none'
      onFocus={onFocus}
      onChange={onSearch}
      onKeyUp={onKeyup}
      value={keyword}
    />
  );
}
