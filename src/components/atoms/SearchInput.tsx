import { useCallback, Dispatch, ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import States from '../../states';

interface Props {
  setShowSearchContainer: Dispatch<boolean>;
}

export default function SearchInput({ setShowSearchContainer }: Props) {
  const [keyword, setKeyword] = useRecoilState(States.SearchKeyword);
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
      value={keyword}
    />
  );
}
