import axios from 'axios';

export const getSummoner = async (name: string) => {
  const API_URL = `https://codingtest.op.gg/api/summoner/${name}?hl=ko`;
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
