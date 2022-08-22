import React from 'react';
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

interface Props {
  gameType: 'all' | 'solRank' | 'freeRank';
  games: IGame[];
  positions: IPosition[];
  summary: ISummary;
  champions: IChampion[];
}

export default function SummonerSummaryInMatches({
  gameType,
  positions,
  summary,
  champions
}: Props) {
  // console.log(positions);
  const championWinRate = getChampionWinRate(summary.wins, summary.losses);
  const kda = getKda(summary.kills, summary.deaths, summary.assists);
  const average = getAverage(summary.kills, summary.deaths, summary.assists);
  const averageColor = getColorInAverage(+average);
  const matchedRecords = getMatchedRecords(summary.wins, summary.losses);
  return (
    <section className='flex items-center pt-4 pb-6'>
      <section className='pl-6 pr-[1.1875rem]'>
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
                {average}:1 평점
              </span>
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </section>
  );
}
