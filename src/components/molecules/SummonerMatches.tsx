import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import Molecules from './index';
import States from '../../states';
import Atoms from '../atoms';

interface TabItem {
  id: string;
  title: string;
}

const styleOfTabItems = {
  tabs: {
    height: '2.25rem',
    backgroundColor: '#f2f2f2',
    paddingLeft: '1rem'
  },
  buttonDefault: {
    width: 'auto',
    fontSize: '0.75rem',
    color: '#555',
    marginRight: '1.5rem'
  },
  buttonActive: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
    color: '#1f8ecd',
    borderBottom: '0.125rem solid #1f8ecd'
  }
};

export default function SummonerMatches() {
  const tabItems: TabItem[] = [
    {
      id: 'all',
      title: '전체'
    },
    {
      id: 'solRank',
      title: '솔로게임'
    },
    {
      id: 'freeRank',
      title: '자유랭크'
    }
  ];
  const [selectedTabItem, setSelectedTabItem] = useState<TabItem>(tabItems[0]);
  const { status, data } = useRecoilValue(States.Matches);

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (status === 'error') {
    return <div>error...</div>;
  }

  const { champions, games, positions, summary } = data;

  return (
    <section className='mt-2.5 bg-[#ededed] border border-[#cdd2d2]'>
      <Atoms.TabMenus
        tabItems={tabItems}
        selectedItem={selectedTabItem}
        setSelectedItem={setSelectedTabItem}
        style={styleOfTabItems}
      />
      <Molecules.SummonerSummaryInMatches />
    </section>
  );
}
