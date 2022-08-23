import { IGame } from '../../models/interfaces/Game';
import Atoms from '../atoms';

interface Props {
  games: IGame[];
}

export default function MatchedList({ games }: Props) {
  return (
    <ul>
      {games.map(
        (
          {
            isWin,
            createDate,
            gameType,
            gameLength,
            champion,
            spells,
            peak,
            stats
          },
          index
        ) => (
          <li
            key={`game-${index}`}
            className='m-h-24 mb-2 last:mb-0 flex'
            style={{
              backgroundColor: isWin ? '#b0ceea' : '#d6b5b2'
            }}>
            <section
              className='flex-1 h-full flex'
              style={{
                border: isWin ? 'solid 1px #a1b8cd' : 'solid 1px #c0aba8'
              }}>
              <Atoms.ShortMatchResult
                gameType={gameType}
                createDate={createDate}
                isWin={isWin}
                gameLength={gameLength}
              />
              <Atoms.ChampionInMatchedList
                imageUrl={champion.imageUrl}
                name={champion.name}
                spells={spells}
                peak={peak}
              />
              <Atoms.ChampionKdaInMatchedList stats={stats} />
              <Atoms.ChampionStatInMatchedList
                level={champion.level || 0}
                stats={stats}
              />
            </section>
            <section
              className='w-[1.875rem]'
              style={{
                backgroundColor: isWin ? '#7fb0e1' : '#e89c95',
                border: isWin ? 'solid 1px #549dc7' : 'solid 1px #c8817c'
              }}>
              2
            </section>
          </li>
        )
      )}
    </ul>
  );
}
