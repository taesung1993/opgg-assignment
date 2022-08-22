import { atom } from 'recoil';
import { AsyncData } from '../models/interfaces/AsyncData';
import { IMatches } from '../models/interfaces/Matches';

type State = AsyncData<IMatches>;

export default atom<State>({
  key: 'matches',
  default: {
    status: 'loading',
    data: null
  }
});
