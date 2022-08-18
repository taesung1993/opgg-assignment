import Atoms from '../atoms';
import { ISearchNavItem } from '../../models/interfaces/SearchNavItem';
import { useState } from 'react';

const navItems: ISearchNavItem[] = [
  {
    id: 'navItem-1',
    title: '최근검색',
    type: 'latest'
  },
  {
    id: 'navItem-2',
    title: '즐겨찾기',
    type: 'popular'
  }
];

export default function Search() {
  const [selectedItem, setSelectedItem] = useState<ISearchNavItem>(navItems[0]);

  return (
    <div className='w-[16.25rem] h-8 flex items-center bg-white py-2 px-[0.875rem] relative'>
      <Atoms.SearchInput />
      <Atoms.SearchButton />
      <section className='absolute left-0 top-full w-full border shadow-[0px_2px_4px_0px_rgb(0,0,0,0.5)]'>
        <Atoms.SearchNav
          navItems={navItems}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Atoms.SearchContent type={selectedItem.type} />
      </section>
    </div>
  );
}
