import { screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { MOCK_SUMMONER } from '../../../mocks/constants';
import States from '../../../states';
import Molecules from '../index';

describe('<SummonerInfo/>', () => {
  it('데이터가 로딩일 경우, 스켈레톤 두 개가 디스플레이 뙨다.', () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(States.SummonerProfile, {
            status: 'loading',
            data: null
          });
        }}>
        <Molecules.SummonerInfo />
      </RecoilRoot>
    );

    const skeletons = screen.getAllByRole('league-skeleton');
    expect(skeletons).toHaveLength(2);
  });

  it('데이터가 정상일 경우, 바인딩 되는 솔로랭크에서만 게임 수, LP 정보, 전적(승 / 패), 승률을 확인한다.', () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(States.SummonerProfile, {
            status: 'success',
            data: MOCK_SUMMONER
          });
        }}>
        <Molecules.SummonerInfo />
      </RecoilRoot>
    );

    const soloRank = screen.queryByText('솔로 랭크');
    expect(soloRank).toBeInTheDocument();

    const totalGames = screen.getByRole('solRank-total-games');
    expect(totalGames).toBeInTheDocument();
    expect(totalGames).toHaveTextContent('탑 (총 1,519 게임)');

    const tierDivision = screen.getByRole('solRank-tier-division');
    expect(tierDivision).toHaveTextContent('Grandmaster');

    const lp = screen.getByRole('solRank-tier-lp');
    expect(lp).toHaveTextContent(/723 LP/);

    const gameTotals = screen.getByRole('solRank-game-totals');
    expect(gameTotals).toHaveTextContent(/986승 533패/);

    const winsRate = screen.getByRole('solRank-wins-rate');
    const percent = Math.floor((986 / 1519) * 100);
    console.log(percent);
    expect(winsRate).toHaveTextContent(`승률 ${percent}%`);
  });
});
