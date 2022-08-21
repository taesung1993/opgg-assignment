import { atom } from 'recoil';
import { ISummoner } from '../models/interfaces/Summoner';

interface Success {
  status: 'success';
  data: ISummoner;
}

interface Error {
  status: 'error';
  data: string;
}

interface Loading {
  status: 'loading';
  data: null;
}

type State = Loading | Success | Error;

export default atom<State>({
  key: 'SummonerProfile',
  default: {
    status: 'loading',
    data: null
  }
});
