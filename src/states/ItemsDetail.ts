import { atom } from 'recoil';
import { AsyncData } from '../models/interfaces/AsyncData';
import { IItemDetail } from '../models/interfaces/ItemDetail';

type State = AsyncData<IItemDetail>;
export default atom<State>({
  key: 'itemDetail',
  default: {
    status: 'loading',
    data: null
  }
});
