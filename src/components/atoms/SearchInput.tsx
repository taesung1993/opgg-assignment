import { useCallback, Dispatch } from 'react';

interface Props {
  setShowSearchContainer: Dispatch<boolean>;
}

export default function SearchInput({ setShowSearchContainer }: Props) {
  const onFocus = useCallback(() => {
    setShowSearchContainer(true);
  }, []);

  return (
    <input
      type='text'
      placeholder='소환사명,챔피언…'
      className='w-full h-full text-xs font-apple focus:outline-none'
      onFocus={onFocus}
    />
  );
}
