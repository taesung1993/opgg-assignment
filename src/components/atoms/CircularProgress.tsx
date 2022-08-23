import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

interface Props {
  percent: number;
}

export default function CircularProgress({ percent }: Props) {
  return (
    <section className='w-[5.625rem] h-[5.625rem]'>
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        strokeWidth={13}
        counterClockwise={true}
        styles={buildStyles({
          trailColor: '#ee5a52',
          strokeLinecap: 'butt',
          textSize: '0.875rem',
          textColor: '#555555'
        })}
      />
    </section>
  );
}
