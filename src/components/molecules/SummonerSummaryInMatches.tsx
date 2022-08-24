import { useMemo } from 'react';
import {
  filteredSummaryPerGames,
  getAverage,
  getChampionWinRate,
  getColorInAverage,
  getColorInWinsRate,
  getMatchedRecords
} from '../../controllers/matchesController';
import { IChampion } from '../../models/interfaces/Champion';
import { IGame } from '../../models/interfaces/Game';
import { IPosition } from '../../models/interfaces/Position';
import { ISummary } from '../../models/interfaces/Summary';
import Atoms from '../atoms';
import Icons from '../icons';

interface Props {
  positions: IPosition[];
  champions: IChampion[];
  games: IGame[];
}

export default function SummonerSummaryInMatches({
  positions,
  champions,
  games
}: Props) {
  const filteredSummary: ISummary = useMemo(() => {
    return filteredSummaryPerGames(games);
  }, [games]);
  return (
    <section className='flex items-center border-t border-t-[#cdd2d2]'>
      <section
        className='pl-6 pt-4 pr-[1.1875rem] w-[17.5rem] h-[9.875rem] border-r border-[#cdd2d2]'
        role='sumary-info'>
        <Summary summary={filteredSummary} />
      </section>
      <section className='w-[14.25rem] py-4 pl-4 pr-[1.125rem] h-[9.875rem] border-r border-[#cdd2d2] flex flex-col gap-3'>
        <Champions champions={champions} />
      </section>
      <section className='flex-1 h-[9.875rem] pt-4 pl-4'>
        <Positions positions={positions} />
      </section>
    </section>
  );
}

function Summary({
  summary: { wins, losses, kills, deaths, assists }
}: {
  summary: ISummary;
}) {
  const championWinRate = getChampionWinRate(wins, losses);
  const average = getAverage(kills, deaths, assists);
  const averageColor = getColorInAverage(+average);
  const matchedRecords = getMatchedRecords(wins, losses);
  const totalGames = wins + losses;

  return (
    <>
      <div className='text-xs text-[#666] pl-[0.5625rem] mb-[0.875rem]'>
        {matchedRecords}
      </div>
      <div className='flex gap-[2.1875rem]'>
        <Atoms.CircularProgress percent={championWinRate} />
        <div>
          <div
            className='text-[0.6875rem] font-bold text-right'
            role='kda-in-summary-in-matches'>
            <span className='text-[#333333]'>
              {(kills / totalGames).toFixed(1)}
            </span>
            <span className='text-[#999]'>&nbsp;/&nbsp;</span>
            <span className='text-[#c6443e]'>
              {(deaths / totalGames).toFixed(1)}
            </span>
            <span className='text-[#999]'>&nbsp;/&nbsp;</span>
            <span className='text-[#333333]'>
              {(assists / totalGames).toFixed(1)}
            </span>
          </div>
          <div className='text-[1rem] text-right'>
            <div
              className='flex items-center'
              style={{
                color: averageColor
              }}
              role='average-in-summary-in-matches'>
              <span className='font-bold'>{average}</span>
              <span>:1&nbsp;</span>
              <span className='text-[#c6443e] leading-[11px] mb-[2px]'>
                ({championWinRate}%)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Champions({ champions }: { champions: IChampion[] }) {
  const emptyLength = 3 - champions.length > 0 ? 3 - champions.length : 0;
  const emptyArray = Array.from(
    { length: emptyLength },
    (_, index) => index + 1
  );
  return (
    <>
      <ul className='w-full'>
        {champions.map(
          ({ kills, deaths, assists, imageUrl, losses, wins, name }, index) => (
            <li
              key={`champions-${index}`}
              className='w-full h-[2.125rem] flex items-center mb-3 last:mb-0'
              role='champion-in-summary'>
              <div className='w-[2.125rem] h-[2.125rem] rounded-full overflow-hidden mr-2'>
                <img
                  className='w-full h-full'
                  src={imageUrl}
                  alt={`${name}'s image`}
                />
              </div>
              <div className='flex-1'>
                <h6 className='w-[5.25rem] text-ellipsis font-nanum text-sm whitespace-nowrap overflow-hidden'>
                  {name}
                </h6>
                <div className='flex items-center text-[0.6875rem]'>
                  <div className='w-[4.1875rem] whitespace-nowrap overflow-hidden text-ellipsis'>
                    <span
                      className='font-bold'
                      style={{
                        color: getColorInWinsRate(
                          +getChampionWinRate(wins, losses)
                        )
                      }}>
                      {getChampionWinRate(wins, losses)}%&nbsp;
                    </span>
                    <span className='text-[#333]'>
                      {wins}승 {losses}패
                    </span>
                  </div>

                  <div className='divider h-[0.6875rem] w-[1px] bg-[#cdd2d2] mx-1.5'></div>
                  <div
                    className='flex-1'
                    style={{
                      color: getColorInAverage(
                        +getAverage(kills, deaths, assists)
                      )
                    }}>
                    {getAverage(kills, deaths, assists)} 평점
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
      <ul className='w-full'>
        {emptyArray.map((key) => (
          <li
            key={`empty-${key}`}
            className='w-full h-[2.125rem] flex items-center mb-3 last:mb-0'
            role='empty-champion-in-summary'>
            <div className='mr-2'>
              <Icons.NoChampion />
            </div>
            <div className='font-nanum text-[0.6875rem] text-[#999]'>
              챔피언 정보가 없습니다.
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function Positions({ positions }: { positions: IPosition[] }) {
  const Icon = (position: string) => {
    if (position === 'TOP') {
      return <Icons.Top />;
    }

    if (position === 'ADC') {
      return <Icons.Adc />;
    }

    if (position === 'JNG') {
      return <Icons.Jng />;
    }

    if (position === 'MID') {
      return <Icons.Mid />;
    }

    return <Icons.Sup />;
  };

  const role = (position: string) => {
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

  return (
    <>
      <div className='mb-[1.375rem] text-xs text-[#666]'>
        선호 포지션 (랭크)
      </div>
      <ul className='w-full flex flex-col gap-6'>
        {positions.map(({ wins, losses, position }, index) => (
          <li
            key={`position-${index}`}
            className='h-7 flex items-center w-full'
            role='positions-in-summary'>
            <div className='mr-2'>{Icon(position)}</div>
            <div className='flex-1'>
              <div className='text-sm text-[#333]'>{role(position)}</div>
              <div className='text-[0.6875rem] text-[#666]'>
                승률 {getChampionWinRate(wins, losses)}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
