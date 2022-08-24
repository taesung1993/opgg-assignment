import { screen, render, within } from '@testing-library/react';
import {
  filteredSummaryPerGames,
  getAverage,
  getChampionWinRate,
  getColorInAverage,
  getKda
} from '../../../controllers/matchesController';
import { MOCK_MATCHES } from '../../../mocks/constants';
import { IChampion } from '../../../models/interfaces/Champion';
import { IGame } from '../../../models/interfaces/Game';
import { IPosition } from '../../../models/interfaces/Position';
import { ISummary } from '../../../models/interfaces/Summary';
import Molecules from '../index';

const positions = MOCK_MATCHES['positions'] as IPosition[];
const summary = MOCK_MATCHES['summary'] as ISummary;
const champions = MOCK_MATCHES['champions'] as IChampion[];
const games = MOCK_MATCHES['games'] as IGame[];
const convertHexToRGBA = (hexCode: string) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const getRole = (position: string) => {
  if (position === 'TOP') {
    return '탑';
  }

  if (position === 'ADC') {
    return '원딜';
  }

  if (position === 'JNG') {
    return '정글';
  }

  if (position === 'MID') {
    return '미드';
  }

  return '서포터';
};

describe('<SummonerSummaryInMatches/>', () => {
  it('요약 정보가 잘 시각화되있어 있는지 확인합니다.', () => {
    render(
      <Molecules.SummonerSummaryInMatches
        positions={positions}
        champions={champions}
        games={games}
      />
    );

    const summarySection = screen.getByRole('sumary-info');
    expect(summarySection).toBeInTheDocument();
    const { kills, deaths, assists } = filteredSummaryPerGames(games);
    const kda = `${(kills / games.length).toFixed(1)} / ${(
      deaths / games.length
    ).toFixed(1)} / ${(assists / games.length).toFixed(1)}`;
    expect(
      within(summarySection).getByRole('kda-in-summary-in-matches')
    ).toHaveTextContent(kda);

    const average = getAverage(kills, deaths, assists);
    const averageEl = within(summarySection).getByRole(
      'average-in-summary-in-matches'
    );
    expect(averageEl).toBeInTheDocument();
    expect(averageEl).toHaveTextContent(`${average}:1`);
  });

  it('챔피언 정보가 잘 시각화되어 있는지 확인합니다.', () => {
    render(
      <Molecules.SummonerSummaryInMatches
        positions={positions}
        champions={champions}
        games={games}
      />
    );

    const championInSummary = screen.getAllByRole('champion-in-summary');
    expect(championInSummary).toHaveLength(2);

    for (let i = 0; i < championInSummary.length; i++) {
      const championEl = championInSummary[i];
      const { wins, losses, name, kills, deaths, assists } = champions[i];

      const imageEl = within(championEl).getByAltText(`${name}'s image`);
      expect(imageEl).toBeInTheDocument();

      const nameEl = within(championEl).getByRole('heading', {
        name
      });
      expect(nameEl).toHaveTextContent(name);

      const winRateTextEl = within(championEl).getByText(
        `${wins}승 ${losses}패`
      );
      expect(winRateTextEl).toBeInTheDocument();
      const average = getAverage(kills, deaths, assists);
      const color = convertHexToRGBA(getColorInAverage(+average));
      const averageEl = within(championEl).getByText(`${average} 평점`);

      expect(averageEl).toBeInTheDocument();
      expect(averageEl.style.color).toBe(color);
    }

    const emptyChampions = screen.getAllByRole('empty-champion-in-summary');
    let count = 0;

    for (let i = 0; i < emptyChampions.length; i++) {
      const emptyChampion = emptyChampions[i];
      const textMessage =
        within(emptyChampion).getByText('챔피언 정보가 없습니다.');

      expect(textMessage).toBeInTheDocument();
      count++;
    }

    expect(count).toBe(1);
  });

  it('포지션 정보가 잘 시각화되어 있는지 확인합니다.', () => {
    render(
      <Molecules.SummonerSummaryInMatches
        positions={positions}
        champions={champions}
        games={games}
      />
    );

    const positionsInSummary = screen.getAllByRole('positions-in-summary');
    expect(positionsInSummary).toHaveLength(2);

    for (let i = 0; i < positionsInSummary.length; i++) {
      const container = positionsInSummary[i];
      const { wins, losses, position } = positions[i];
      const winRate = getChampionWinRate(wins, losses);
      const role = getRole(position);

      const rateEl = within(container).getByText(`승률 ${winRate}%`, {
        exact: false
      });
      const positionNameEl = within(container).getByText(`${role}`);

      expect(rateEl).toBeInTheDocument();
      expect(positionNameEl).toBeInTheDocument();
    }
  });
});
