import { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getTeam } from '../../controllers/matchesController';
import { IPlayer } from '../../models/interfaces/Player';
import States from '../../states';

interface Props {
  gameId: string;
}

export default function PlayersInMatch({ gameId }: Props) {
  const summonerName = useRecoilValue(States.SummonerName);
  const [players, setPlayers] = useState<{ a: IPlayer[]; b: IPlayer[] }>({
    a: [],
    b: []
  });

  const getTeamInMatch = useCallback(async () => {
    try {
      const { teams: teamsInMatch } = await getTeam(gameId);
      const [teamA, teamB] = teamsInMatch;
      setPlayers({
        a: teamA.players,
        b: teamB.players
      });
    } catch (err: any) {
      console.log(err);
    }
  }, [gameId]);

  useEffect(() => {
    getTeamInMatch();
  }, [gameId]);
  return (
    <section className='flex items-center'>
      <ul className='w-[4.375rem] mr-[0.8125rem] gap-0.5'>
        {players['a'].map((player, index) => (
          <li key={`a-player-${index}`} className='flex items-center'>
            <img
              className='w-4 h-4 border border-[#0d0819] mr-[0.1875rem]'
              src={player.champion.imageUrl}
              alt={`${player.summonerName}'s champion`}
            />
            <div
              className='text-[0.6875rem] whitespace-nowrap overflow-hidden text-ellipsis -tracking-[0.42px]'
              style={{
                color: summonerName === player.summonerName ? '#000' : '#555'
              }}>
              {player.summonerName}
            </div>
          </li>
        ))}
      </ul>
      <ul className='w-[4.375rem] mr-[0.8125rem] gap-0.5'>
        {players['b'].map((player, index) => (
          <li key={`b-player-${index}`} className='flex items-center'>
            <img
              className='w-4 h-4 border border-[#0d0819] mr-[0.1875rem]'
              src={player.champion.imageUrl}
              alt={`${player.summonerName}'s champion`}
            />
            <div
              className='text-[0.6875rem] whitespace-nowrap overflow-hidden text-ellipsis -tracking-[0.42px]'
              style={{
                color: summonerName === player.summonerName ? '#000' : '#555'
              }}>
              {player.summonerName}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
