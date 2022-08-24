import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Molecules from '.';
import States from '../../states';
import Atoms from '../atoms';

interface TabItem {
  id: string;
  title: string;
}

const style = {
  tabs: {
    height: '2.5rem',
    divider: '#cdd2d2'
  },
  buttonDefault: {
    backgroundColor: '#f2f2f2',
    color: '#879292',
    borderBottom: '1px solid #cdd2d2',
    fontSize: '0.75rem',
    fontFamily: '"AppleSDGothicNeo", "Noto Sans KR", sans-serif'
  },
  buttonActive: {
    backgroundColor: '#ededed',
    color: '#5e5e5e',
    fontWeight: 'bold',
    fontSize: '0.75rem',
    borderBottom: 'none'
  }
};

export default function MostInfo() {
  const tabItems: TabItem[] = [
    {
      id: 'champions',
      title: '챔피언 승률'
    },
    {
      id: 'recentWinRate',
      title: '7일간 랭크 승률'
    }
  ];
  const [selectedTabItem, setSelectedTabItem] = useState<TabItem>(tabItems[0]);
  const mostInfo = useRecoilValue(States.MostInfo);
  return (
    <section className='border bg-[#ededed]  border-[#cdd2d2] rounded-sm'>
      <Atoms.TabMenus
        tabItems={tabItems}
        selectedItem={selectedTabItem}
        setSelectedItem={setSelectedTabItem}
        style={style}
      />
      <Molecules.MostInfoContent
        mostInfo={mostInfo}
        selectedTabItem={selectedTabItem}
      />
    </section>
  );
}
