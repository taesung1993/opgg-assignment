import { ISummoner } from '../models/interfaces/Summoner';

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
