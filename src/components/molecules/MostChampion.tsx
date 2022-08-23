import { IChampion } from '../../models/interfaces/Champion';
import Atoms from '../atoms';

interface Props {
  champions: IChampion[];
}

export default function MostChampion({ champions }: Props) {
  return (
    <ul>
      {champions.map((champion, index) => (
        <Atoms.ChampionItem key={'champion' + index} champion={champion} />
      ))}
    </ul>
  );
}
