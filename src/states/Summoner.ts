import { atom } from 'recoil';
import { ISummoner } from '../models/interfaces/Summoner';

export default atom<ISummoner | null>({
  key: 'summoner',
  default: null
});
