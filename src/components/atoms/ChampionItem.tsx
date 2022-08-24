import {
  getAverage,
  getChampionWinRate,
  getColorInAverage,
  getColorInWinsRate
} from '../../controllers/matchesController';
import { IChampion } from '../../models/interfaces/Champion';

interface Props {
  champion: IChampion;
}

export default function ChampionItem({ champion }: Props) {
  return (
    <li
      className='flex items-center px-4 py-1 h-[3.3125rem] border-b border-b-[#cdd2d2] last:border-b-0'
      role='champion-item'>
      <div className='w-[2.8125rem] h-[2.8125] rounded-full overflow-hidden mr-2.5'>
        <img
          className='w-full h-full'
          src={champion.imageUrl}
          alt={`${champion.name}'s image`}
        />
      </div>
      <div className='w-[4.6rem]'>
        <h6 className='text-[#5e5e5e] text-[0.8125rem] leading-[1] mb-0 font-bold whitespace-nowrap text-ellipsis overflow-hidden font-apple'>
          {champion.name}
        </h6>
        <div className='text-[#879292] text-[0.6875rem]'>CS {champion.cs}</div>
      </div>
      <div className='flex-1 text-right mr-6'>
        <Average
          kills={champion.kills}
          deaths={champion.deaths}
          assists={champion.assists}
        />
        <KDA
          kills={champion.kills}
          deaths={champion.deaths}
          assists={champion.assists}
        />
      </div>
      <div className='w-[2.4rem] text-right'>
        <WinsRate games={champion.games} wins={champion.wins} />
        <div className='text-[#879292] text-[0.6875rem]'>
          {champion.games}게임
        </div>
      </div>
    </li>
  );
}

function Average({
  kills,
  assists,
  deaths
}: {
  kills: number;
  assists: number;
  deaths: number;
}) {
  // const getAverage = (kills: number, deaths: number, assists: number) => {
  //   return +((kills + assists) / deaths).toFixed(2);
  // };
  const average = getAverage(kills, deaths, assists);
  const color = getColorInAverage(+average);

  return (
    <div
      className='text-[0.8125rem] leading-[1] mb-[0.1875rem] font-bold whitespace-nowrap'
      style={{
        color
      }}>
      {average} : 1 <span className='font-apple'>평점</span>
    </div>
  );
}

function KDA({
  kills,
  deaths,
  assists
}: {
  kills: number;
  deaths: number;
  assists: number;
}) {
  const nomalizationKills = kills / 10;
  const nomalizationDeaths = deaths / 10;
  const nomalizationAssists = assists / 10;

  return (
    <div className='text-[#879292] text-[0.6875rem]'>
      <span>{nomalizationKills}</span>
      <span>&nbsp;/&nbsp;</span>
      <span>{nomalizationDeaths}</span>
      <span>&nbsp;/&nbsp;</span>
      <span>{nomalizationAssists}</span>
    </div>
  );
}

function WinsRate({ wins, games }: { wins: number; games: number }) {
  const winsRate = getChampionWinRate(wins, games - wins);
  const color = getColorInWinsRate(winsRate);
  return (
    <div
      className='text-[0.8125rem] leading-[1] mb-[0.1875rem] font-bold'
      style={{
        color
      }}>
      {winsRate}%
    </div>
  );
}
