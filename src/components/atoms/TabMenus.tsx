import { Dispatch } from 'react';

interface Style {
  tabs?: {
    width?: string;
    height?: string;
  };
  buttonDefault?: {
    [key: string]: string;
  };
  buttonActive?: {
    [key: string]: string;
  };
}

interface Props<T> {
  tabItems: T[];
  selectedItem: T;
  setSelectedItem: Dispatch<T>;
  style?: Style;
}

export default function TabMenus<T extends { id: string; title: string }>({
  tabItems,
  selectedItem,
  setSelectedItem,
  style
}: Props<T>) {
  const selectedId = selectedItem.id;
  const buttonDefault = style?.buttonDefault || {
    background: '#e3e3e3',
    color: '#9c9c9c'
  };
  const buttonActive = style?.buttonActive || {
    background: '#fff',
    color: '#4a4a4a'
  };

  return (
    <nav
      role='search-nav'
      style={{
        width: style?.tabs?.width || '100%',
        height: style?.tabs?.height || '2.5rem'
      }}>
      <ul className='flex items-center w-full h-full'>
        {tabItems.map((tabItem) => (
          <li className='flex-1 w-full h-full' key={tabItem.id}>
            <button
              className='w-full h-full flex justify-center items-center text-sm'
              style={selectedId === tabItem.id ? buttonActive : buttonDefault}
              onClick={() => setSelectedItem(tabItem)}>
              {tabItem.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
