import React from 'react';
import { RiContactsBookLine } from 'react-icons/ri';
import {
  getAverage,
  getChampionWinRate,
  getColorInAverage,
  getKda,
  getMatchedRecords
} from '../../controllers/matchesController';
import { IChampion } from '../../models/interfaces/Champion';
import { IGame } from '../../models/interfaces/Game';
import { IPosition } from '../../models/interfaces/Position';
import { ISummary } from '../../models/interfaces/Summary';
import Atoms from '../atoms';
import Icons from '../icons';

interface Props {
  gameType: 'all' | 'solRank' | 'freeRank';
  games: IGame[];
  positions: IPosition[];
  summary: ISummary;
  champions: IChampion[];
}

export default function SummonerSummaryInMatches({
  positions,
  summary,
  champions
}: Props) {
  return (
    <section className='flex items-center border-t border-t-[#cdd2d2]'>
      <section className='pl-6 pt-4 pr-[1.1875rem] w-[17.5rem] h-[9.875rem] border-r border-[#cdd2d2]'>
        <Summary summary={summary} />
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
  const kda = getKda(kills, deaths, assists);
  const average = getAverage(kills, deaths, assists);
  const averageColor = getColorInAverage(+average);
  const matchedRecords = getMatchedRecords(wins, losses);

  return (
    <>
      <div className='text-xs text-[#666] pl-[0.5625rem] mb-[0.875rem]'>
        {matchedRecords}
      </div>
      <div className='flex items-center gap-[2.1875rem]'>
        <Atoms.CircularProgress percent={championWinRate} />
        <div>
          <div className='text-[0.6875rem] font-bold mb-1.5'>{kda}</div>
          <div className='text-base'>
            <span
              style={{
                color: averageColor
              }}>
              {average}:1
            </span>
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
          (
            { kills, deaths, assists, games, id, imageUrl, losses, wins, name },
            index
          ) => (
            <li
              key={`champions-${index}`}
              className='w-full h-[2.125rem] flex items-center mb-3 last:mb-0'>
              <div className='w-[2.125rem] h-[2.125rem] rounded-full overflow-hidden mr-2'>
                <img
                  className='w-full h-full'
                  src={imageUrl}
                  alt={`${name}'s image`}
                />
              </div>
              <div className='flex-1'>
                <h6 className='w-[5.25rem] text-ellipsis text-sm whitespace-nowrap overflow-hidden'>
                  {name}
                </h6>
                <div className='flex items-center text-[0.6875rem]'>
                  <div className='w-[4.1875rem]'>
                    <span className='text-[#333] font-bold'>
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
            className='w-full h-[2.125rem] flex items-center mb-3 last:mb-0'>
            <div className='mr-2'>
              <Icons.NoChampion />
            </div>
            <div className='text-[0.6875rem] text-[#999]'>
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
      <div className='mb-[1.375rem] text-xs text-[#666]'>선호 포지션</div>
      <ul className='w-full flex flex-col gap-6'>
        {positions.map(({ wins, losses, position }, index) => (
          <li
            key={`position-${index}`}
            className='h-7 flex items-center w-full'>
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
