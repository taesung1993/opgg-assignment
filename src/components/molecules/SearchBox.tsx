// import Atoms from '../atoms';
import { ISearchNavItem } from '../../models/interfaces/SearchNavItem';
import { useState } from 'react';
import Atoms from '../atoms';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
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

export default function SearchBox() {
  const [selectedItem, setSelectedItem] = useState<ISearchNavItem>(navItems[0]);
  const keyword = useRecoilValue(States.SearchKeyword);
  const { state, contents } = useRecoilValueLoadable(States.SearchedSummoner);

  const Content = keyword ? (
    <Atoms.SearchResult summoners={[contents]} />
  ) : (
    <>
      <Atoms.SearchNav
        navItems={navItems}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Atoms.SearchContent type={selectedItem.type} />
    </>
  );
  return (
    <section className='absolute left-0 top-full w-full h-100 border shadow-[0px_2px_4px_0px_rgb(0,0,0,0.5)]'>
      {Content}
    </section>
  );
}
