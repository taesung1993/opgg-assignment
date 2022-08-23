import { Dispatch } from 'react';

interface Style {
  tabs?: {
    [key: string]: string;
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
    color: '#9c9c9c',
    fontSize: '0.875rem',
    lineHeight: '1.25rem'
  };
  const buttonActive = style?.buttonActive || {
    background: '#fff',
    color: '#4a4a4a',
    fontSize: '0.875rem',
    lineHeight: '1.25rem'
  };
  const isDividerOption = !!style?.tabs?.divider;
  const applyButtonAcitve = (id: string, selectedId: string) => {
    let style = { ...buttonDefault };
    if (id === selectedId) {
      style = { ...style, ...buttonActive };
    }

    return style;
  };

  return (
    <nav
      role='search-nav'
      style={{
        width: style?.tabs?.width || '100%',
        height: style?.tabs?.height || '2.5rem',
        backgroundColor: style?.tabs?.backgroundColor || 'transparent',
        ...style?.tabs
      }}>
      <ul className='flex items-center w-full h-full'>
        {tabItems.map((tabItem, index) => (
          <li
            className='relative h-full'
            key={tabItem.id}
            style={{
              width: buttonDefault?.width || '100%'
            }}>
            {isDividerOption && index ? (
              <div
                className='absolute top-0 left-0 w-[1px] h-full'
                style={{
                  backgroundColor: style?.tabs?.divider || 'transparent'
                }}></div>
            ) : (
              <></>
            )}
            <button
              className='w-full h-full flex justify-center items-center'
              style={applyButtonAcitve(tabItem.id, selectedId)}
              onClick={() => setSelectedItem(tabItem)}>
              {tabItem.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
