import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
import ko from 'dayjs/locale/ko';
import duration from 'dayjs/plugin/duration';

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);
dayjs.extend(duration);
dayjs.locale(ko);
dayjs
  .duration({
    seconds: 2,
    minutes: 2,
    hours: 2,
    days: 2,
    weeks: 2,
    months: 2,
    years: 2
  })
  .format('YYYY-MM-DDTHH:mm:ss');

export const fromNow = (createDate: number) => {
  const date = new Date(createDate * 1000);
  return dayjs(date).fromNow();
};

export const getDuration = (seconds: number) => {
  return dayjs
    .duration(seconds * 1000)
    .format('H시간 mm분 ss초')
    .replace(/0시간|00분|/g, '')
    .trim();
};
