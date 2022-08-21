import { atom } from 'recoil';
import { AsyncData } from '../models/interfaces/AsyncData';
import { ISummoner } from '../models/interfaces/Summoner';

type State = AsyncData<ISummoner>;

export default atom<State>({
  key: 'SummonerProfile',
  default: {
    status: 'loading',
    data: null
  }
});
