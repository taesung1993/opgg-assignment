import { useMemo } from 'react';
import { IChampion } from '../../models/interfaces/Champion';

interface Props {
  champion: IChampion;
}

export default function ChampionItem({ champion }: Props) {
  return (
    <li className='flex items-center px-4 py-1 h-[3.3125rem] border-b border-b-[#cdd2d2] last:border-b-0'>
      <div className='w-[2.8125rem] h-[2.8125] rounded-full overflow-hidden mr-2.5'>
        <img
          className='w-full h-full'
          src={champion.imageUrl}
          alt={`${champion.name}'s image`}
        />
      </div>
      <div className='w-[5.7rem]'>
        <h6 className='text-[#5e5e5e] text-[0.8125rem] mb-[0.1875rem] font-bold'>
          {champion.name}
        </h6>
        <div className='text-[#879292] text-[0.6875rem]'>CS {champion.cs}</div>
      </div>
      <div className='flex-1 text-center'>
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
  const getAverage = (kills: number, deaths: number, assists: number) => {
    return +((kills + assists) / deaths).toFixed(2);
  };
  const average = getAverage(kills, deaths, assists);
  const getColor = (value: number) => {
    if (value > 5) {
      return '#e19205';
    }

    if (value > 4) {
      return '#1f8ecd';
    }

    if (value > 3) {
      return '#2daf7f';
    }

    return '#879292';
  };

  return (
    <div
      className='text-[0.8125rem] mb-[0.1875rem] font-bold'
      style={{
        color: getColor(average)
      }}>
      {average} : 1 평점
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
  const winsRate = useMemo(() => {
    return Math.floor((wins / games) * 100);
  }, [games, wins]);
  const getColor = (value: number) => {
    if (value > 60) {
      return '#c6443e';
    }

    return '#5e5e5e';
  };
  return (
    <div
      className='text-[0.8125rem] mb-[0.1875rem] font-bold mb-1'
      style={{
        color: getColor(winsRate)
      }}>
      {winsRate}%
    </div>
  );
}
