import Molecules from './index';
import Atoms from '../atoms';
import React, { useMemo, useState, useEffect, useCallback } from 'react';

export default function Search() {
  const [showSearchContainer, setShowSearchContainer] =
    useState<boolean>(false);

  const SearchBox = useMemo(() => {
    return showSearchContainer ? Molecules.SearchBox : React.Fragment;
  }, [showSearchContainer]);

  const onClick = useCallback(
    (event: MouseEvent) => {
      if (showSearchContainer) {
        const target = event.target as HTMLElement;
        const isShowingSearchContainer = target.closest('.search-container');

        if (!isShowingSearchContainer) {
          setShowSearchContainer(false);
        }
      }
    },
    [showSearchContainer]
  );

  useEffect(() => {
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('click', onClick);
    };
  });

  return (
    <div className='search-container w-[16.25rem] h-8 flex items-center bg-white py-2 px-[0.875rem] relative'>
      <Atoms.SearchInput setShowSearchContainer={setShowSearchContainer} />
      <Atoms.SearchButton />
      <SearchBox />
    </div>
  );
}
