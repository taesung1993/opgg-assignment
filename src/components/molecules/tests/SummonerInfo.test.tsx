import { screen, render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { MOCK_SUMMONER } from '../../../mocks/constants';
import States from '../../../states';
import Molecules from '../index';

describe('<SummonerDTO/>', () => {
  it('데이터가 로딩일 경우, 스켈레톤 두 개가 디스플레이 뙨다.', () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(States.SummonerProfile, {
            status: 'loading',
            data: null
          });
        }}>
        <Molecules.SummonerDTO />
      </RecoilRoot>
    );

    const skeletons = screen.getAllByRole('league-skeleton');
    expect(skeletons).toHaveLength(2);
  });

  it('데이터가 정상일 경우, 바인딩 되는 솔로랭크/자유랭크 게임 수, LP 정보, 전적(승 / 패), 승률을 확인한다.', () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(States.SummonerProfile, {
            status: 'success',
            data: MOCK_SUMMONER
          });
        }}>
        <Molecules.SummonerDTO />
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
    expect(winsRate).toHaveTextContent(`승률 ${percent}%`);

    const freeRank = screen.queryByText('자유 5:5 랭크');
    expect(freeRank).toBeInTheDocument();

    const totalGamesInFree = screen.getByRole('free-tier-division');
    expect(totalGamesInFree).toBeInTheDocument();
    expect(totalGamesInFree).toHaveTextContent('Gold');

    const gameTotalsInFree = screen.getByRole('freeRank-game-totals');
    expect(gameTotalsInFree).toHaveTextContent(/95승 413패/);

    const winsRateInFree = screen.getByRole('freeRank-wins-rate');
    const percentInFree = Math.floor((95 / 508) * 100);
    expect(winsRateInFree).toHaveTextContent(`승률 ${percentInFree}%`);
  });
});
