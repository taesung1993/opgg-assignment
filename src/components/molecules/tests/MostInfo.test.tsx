import React from 'react';
import { screen, render } from '@testing-library/react';
import Molecules from '../index';
import { RecoilRoot } from 'recoil';
import States from '../../../states';
import { MOCK_GAME_WINS_RATE } from '../../../mocks/constants';
import userEvent from '@testing-library/user-event';

describe('<MostInfo/>', () => {
  it('에러 없이 렌더링이 되야 합니다.', () => {
    render(
      <RecoilRoot>
        <Molecules.MostInfo />
      </RecoilRoot>
    );
  });

  it('로딩할 때 스켈레톤의 갯수를 파악합니다.', () => {
    render(
      <RecoilRoot>
        <Molecules.MostInfo />
      </RecoilRoot>
    );

    const skeletons = screen.getAllByRole('win-rates-skeleton');
    expect(skeletons).toHaveLength(4);

    for (let i = 0; i < skeletons.length; i++) {
      const skeleton = skeletons[i];
      expect(skeleton).toBeInTheDocument();
    }
  });

  it('에러가 발생했을 경우 문구를 찾습니다.', () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(States.GameWinsRate, {
            status: 'error',
            data: 'Something went wrong'
          });
        }}>
        <Molecules.MostInfo />
      </RecoilRoot>
    );

    const paragraph = screen.getByRole('winRates-err-paragraph');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(
      '죄송합니다. 승률 정보를 불러오는데 실패하였습니다.'
    );
  });

  it('각 승률의 갯수가 제대로 나오는지 확인합니다.', async () => {
    render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(States.GameWinsRate, {
            status: 'success',
            data: MOCK_GAME_WINS_RATE
          });
        }}>
        <Molecules.MostInfo />
      </RecoilRoot>
    );

    const champions = screen.getAllByRole('champion-item');
    expect(champions).toHaveLength(7);

    for (let i = 0; i < champions.length; i++) {
      const champion = champions[i];
      expect(champion).toBeInTheDocument();
    }

    const changeButtonToRecentWinRates = screen.getByRole('button', {
      name: '7일간 랭크 승률'
    });

    await userEvent.click(changeButtonToRecentWinRates);

    const recentWinRates = screen.getAllByRole('recent-winRate-item');
    expect(recentWinRates).toHaveLength(3);

    for (let i = 0; i < recentWinRates.length; i++) {
      const recentWinRate = recentWinRates[i];
      expect(recentWinRate).toBeInTheDocument();
    }

    const changeButtonToChampions = screen.getByRole('button', {
      name: '챔피언 승률'
    });

    await userEvent.click(changeButtonToChampions);

    const championsAfterPressedButton = screen.getAllByRole('champion-item');
    expect(championsAfterPressedButton).toHaveLength(7);

    for (let i = 0; i < champions.length; i++) {
      const champion = championsAfterPressedButton[i];
      expect(champion).toBeInTheDocument();
    }
  });
});
