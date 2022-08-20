import { ISearchNavItem } from '../../models/interfaces/SearchNavItem';
import { Dispatch } from 'react';

interface Props {
  navItems: ISearchNavItem[];
  selectedItem: ISearchNavItem;
  setSelectedItem: Dispatch<ISearchNavItem>;
}

export default function SearchNav({
  navItems,
  selectedItem,
  setSelectedItem
}: Props) {
  const selectedId = selectedItem.id;
  const activeStyle = {
    backgroundColor: '#fff',
    color: '#4a4a4a'
  };

  return (
    <nav className='h-10' role='search-nav'>
      <ul className='flex items-center w-full h-full'>
        {navItems.map((navItem) => (
          <li className='flex-1 w-full h-full' key={navItem.id}>
            <button
              className='w-full h-full flex justify-center items-center bg-greyish-three text-greyish-four text-sm'
              style={selectedId === navItem.id ? activeStyle : {}}
              onClick={() => setSelectedItem(navItem)}>
              {navItem.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
