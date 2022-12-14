// import Atoms from '../atoms';
import { ISearchNavItem } from '../../models/interfaces/SearchNavItem';
import { Dispatch, useEffect, useMemo, useState } from 'react';
import Atoms from '../atoms';
import {
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState
} from 'recoil';
import States from '../../states';

const navItems: ISearchNavItem[] = [
  {
    id: 'navItem-1',
    title: '최근검색',
    type: 'latest'
  },
  {
    id: 'navItem-2',
    title: '즐겨찾기',
    type: 'liked'
  }
];

interface Props {
  setShowSearchContainer: Dispatch<boolean>;
}

export default function SearchBox({ setShowSearchContainer }: Props) {
  const [selectedItem, setSelectedItem] = useState<ISearchNavItem>(navItems[0]);
  const keyword = useRecoilValue(States.SearchKeyword);
  const { contents } = useRecoilValueLoadable(States.SearchedSummoner);
  const setSummoner = useSetRecoilState(States.Summoner);

  useEffect(() => {
    setSummoner(contents);
  }, [contents]);

  const Content = keyword ? (
    <Atoms.SearchResult summoners={[contents]} />
  ) : (
    <>
      <Atoms.TabMenus
        tabItems={navItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Atoms.SearchContent
        type={selectedItem.type}
        setShowSearchContainer={setShowSearchContainer}
      />
    </>
  );
  return (
    <section className='absolute left-0 top-full w-full h-100 border shadow-[0px_2px_4px_0px_rgb(0,0,0,0.5)]'>
      {Content}
    </section>
  );
}
