import { selector } from 'recoil';
import { getSummoner } from '../controllers/summonerController';
import { ISummoner } from '../models/interfaces/Summoner';
import SearchKeyword from './SearchKeyword';

export default selector<ISummoner | null>({
  key: 'searchedSummoner',
  get: async ({ get }) => {
    const keyword = get(SearchKeyword);
    try {
      if (keyword) {
        const { summoner } = await getSummoner(keyword);
        return summoner;
      }
      return null;
    } catch (error) {
      return new Error('소환자 정보를 얻어오는데에 실패하였습니다.');
    }
  }
});
