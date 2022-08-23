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
            stats,
            items,
            gameId
          },
          index
        ) => (
          <li
            key={`game-${index}`}
            className='mb-2 last:mb-0 flex'
            style={{
              height: '96px',
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
              <Atoms.ItemUsedInMatch
                isWin={isWin}
                items={items}
                controlWards={stats.ward.visionWardsBought}
              />
              <Atoms.PlayersInMatch gameId={gameId} />
            </section>
            <section
              className='w-[1.875rem] flex justify-center items-end pb-3'
              style={{
                backgroundColor: isWin ? '#7fb0e1' : '#e89c95',
                border: isWin ? 'solid 1px #549dc7' : 'solid 1px #c8817c'
              }}>
              <div className='w-[0.8125rem] h-2.5'>
                <img
                  src={
                    isWin
                      ? 'https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-blue.png?v=1661142461604'
                      : 'https://s-lol-web.op.gg/static/images/icon/common/icon-viewdetail-red.png?v=1661142461604'
                  }
                />
              </div>
            </section>
          </li>
        )
      )}
    </ul>
  );
}
