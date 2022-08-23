import { atom } from 'recoil';
import { AsyncData } from '../models/interfaces/AsyncData';
import { IMostInfo } from '../models/interfaces/MostInfo';

type State = AsyncData<IMostInfo>;

export default atom<State>({
  key: 'mostInfo',
  default: {
    status: 'loading',
    data: null
  }
});
