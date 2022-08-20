import { ISummoner } from '../models/interfaces/Summoner';

export const getSummonerInLocal = (type: 'latest' | 'liked'): ISummoner[] => {
  const key = type === 'latest' ? 'latestSummoners' : 'likedSummoners';
  const summoners = localStorage.getItem(key);

  return summoners ? JSON.parse(summoners) : [];
};

export const isThatSummonerLiking = (summoner: ISummoner): boolean => {
  const summoners = localStorage.getItem('likedSummoners');
  const list: ISummoner[] = summoners ? JSON.parse(summoners) : [];

  if (list.length) {
    return !!list.find((s) => s.name === summoner.name);
  }

  return false;
};

export const recordSummonerInLocal = (
  summoner: ISummoner,
  type: 'latest' | 'liked'
) => {
  const key = type === 'latest' ? 'latestSummoners' : 'likedSummoners';
  const pastSumoners = localStorage.getItem(key);
  const data: ISummoner[] = pastSumoners
    ? JSON.parse(pastSumoners)
    : [summoner];
  const isDuplicated = data.find((s) => s.name === summoner.name);

  if (!isDuplicated) {
    data.push(summoner);
  }

  localStorage.setItem(key, JSON.stringify(data));
};

export const removeSummonerInLocal = (
  summoner: ISummoner,
  type: 'latest' | 'liked'
) => {
  const key = type === 'latest' ? 'latestSummoners' : 'likedSummoners';
  const pastSumoners = localStorage.getItem(key);
  let data: ISummoner[] = pastSumoners ? JSON.parse(pastSumoners) : [];

  if (data.length <= 1) {
    localStorage.removeItem(key);
    return;
  }

  data = data.filter((s) => s.name !== summoner.name);
  localStorage.setItem(key, JSON.stringify(data));
};
