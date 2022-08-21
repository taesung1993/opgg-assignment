import { screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import states from '../../../states';
import Profile from '../Profile';

describe('<Profile/>', () => {
  it('데이터를 주입하지 않았을 경우에는 스켈레톤 로딩이 떠야한다.', async () => {
    render(
      <RecoilRoot>
        <Profile />
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
        <Profile />
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
            data: {
              name: 'Hide on bush',
              level: 43,
              profileImageUrl:
                'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg',
              profileBorderImageUrl:
                'https://opgg-static.akamaized.net/images/borders2/challenger.png',
              url: 'https://www.op.gg/summoner/userName=Hide on bush',
              leagues: [
                {
                  hasResults: true,
                  wins: 986,
                  losses: 533,
                  tierRank: {
                    name: '솔랭',
                    tier: 'Grandmaster',
                    tierDivision: 'Grandmaster',
                    string: 'Grandmaster (723LP)',
                    shortString: 'GM1',
                    division: 'i',
                    imageUrl:
                      'https://opgg-static.akamaized.net/images/medals/grandmaster_1.png',
                    lp: 723,
                    tierRankPoint: 1
                  }
                },
                {
                  hasResults: true,
                  wins: 95,
                  losses: 413,
                  tierRank: {
                    name: '자유 5:5 랭크',
                    tier: 'Gold',
                    tierDivision: 'Gold',
                    string: 'Gold (20LP)',
                    shortString: 'G1',
                    division: 'i',
                    imageUrl:
                      'https://opgg-static.akamaized.net/images/medals/gold_1.png',
                    lp: 20,
                    tierRankPoint: 148
                  }
                }
              ],
              previousTiers: [
                {
                  name: '솔랭',
                  tier: 'Platinum',
                  tierDivision: 'Platinum',
                  string: 'Platinum (140LP)',
                  shortString: 'P1',
                  division: 'i',
                  imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/platinum_1.png',
                  lp: 140,
                  tierRankPoint: 69,
                  season: 9
                },
                {
                  name: '솔랭',
                  tier: 'Grandmaster',
                  tierDivision: 'Grandmaster',
                  string: 'Grandmaster (383LP)',
                  shortString: 'GM1',
                  division: 'i',
                  imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/grandmaster_1.png',
                  lp: 383,
                  tierRankPoint: 199,
                  season: 8
                },
                {
                  name: '솔랭',
                  tier: 'Gold',
                  tierDivision: 'Gold',
                  string: 'Gold (502LP)',
                  shortString: 'G1',
                  division: 'i',
                  imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/gold_1.png',
                  lp: 502,
                  tierRankPoint: 297,
                  season: 7
                },
                {
                  name: '솔랭',
                  tier: 'Diamond',
                  tierDivision: 'Diamond',
                  string: 'Diamond (977LP)',
                  shortString: 'D1',
                  division: 'i',
                  imageUrl:
                    'https://opgg-static.akamaized.net/images/medals/diamond_1.png',
                  lp: 977,
                  tierRankPoint: 48,
                  season: 6
                }
              ],
              ladderRank: {
                rank: 790218,
                rankPercentOfTop: 4
              },
              profileBackgroundImageUrl:
                'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg'
            }
          });
        }}>
        <Profile />
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
