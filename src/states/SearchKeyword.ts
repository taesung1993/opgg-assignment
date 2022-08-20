import { atom } from 'recoil';

export default atom<string>({
  key: 'searchKeyword',
  default: ''
});
