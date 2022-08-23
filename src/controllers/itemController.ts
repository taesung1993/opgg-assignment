import axios from 'axios';
import { IItemDetail } from '../models/interfaces/ItemDetail';

export const getItemsInQueryFn = async () => {
  const API_URL =
    'http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json';

  try {
    const {
      data: { data: items }
    } = await axios.get(API_URL);
    return items as IItemDetail;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
