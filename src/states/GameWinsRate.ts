import { atom } from 'recoil';
import { AsyncData } from '../models/interfaces/AsyncData';
import { IGameWinsRate } from '../models/interfaces/GameWinsRate';

type State = AsyncData<IGameWinsRate>;

export default atom<State>({
  key: 'gameWinsRate',
  default: {
    status: 'loading',
    data: null
  }
});
