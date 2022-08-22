import { screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { MOCK_SUMMONER } from '../../../mocks/constants';
import states from '../../../states';
import SummonerProfile from '../SummonerProfile';

describe('<SummonerProfile/>', () => {
  it('데이터를 주입하지 않았을 경우에는 스켈레톤 로딩이 떠야한다.', async () => {
    render(
      <RecoilRoot>
        <SummonerProfile />
      </RecoilRoot>
    );

    expect(screen.getByRole('profile-skeleton')).toBeInTheDocument();
  });

  it('에러 테스트', async () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(states.SummonerProfile, {
            status: 'error',
            data: '소환사 정보를 불러오는데 실패하였습니다.'
          });
        }}>
        <SummonerProfile />
      </RecoilRoot>
    );

    const errorBox = screen.getByRole('get-profile-error-box');
    expect(errorBox).toBeInTheDocument();
    expect(errorBox).toHaveTextContent(
      /소환사 정보를 불러오는데 실패하였습니다./
    );
  });

  it('데이터를 주입했을 경우에는 썸네일과 간략한 정보가 나와야한다.', async () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(states.SummonerProfile, {
            status: 'success',
            data: MOCK_SUMMONER
          });
        }}>
        <SummonerProfile />
      </RecoilRoot>
    );

    const thumbnail = screen.getByAltText(/^Hide on bush's thumbnail/);
    const frame = screen.getByAltText(/^Hide on bush's frame/);
    const previousTiers = screen.getAllByRole('profile-tier');

    expect(previousTiers).toHaveLength(4);

    for (let i = 0; i < previousTiers.length; i++) {
      const tier = previousTiers[i];
      expect(tier).toBeInTheDocument();
    }

    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute(
      'src',
      'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg'
    );

    expect(frame).toBeInTheDocument();
    expect(frame).toHaveAttribute(
      'src',
      'https://opgg-static.akamaized.net/images/borders2/challenger.png'
    );

    expect(screen.getByText('Hide on bush')).toBeInTheDocument();
    expect(screen.getByRole('profile-ladder-rank')).toHaveTextContent(
      '레더 랭킹 790,218위 (상위 4%)'
    );
  });
});
