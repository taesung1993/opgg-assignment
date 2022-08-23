import { fromNow, getDuration } from '../../controllers/timeController';

export default function ShortMatchResult({
  gameType,
  createDate,
  isWin,
  gameLength
}: {
  gameType: string;
  createDate: number;
  isWin: boolean;
  gameLength: number;
}) {
  return (
    <section className='w-[4.375rem] text-center pl-2 pt-[0.8125rem] pb-[0.875rem] mr-[0.875rem]'>
      <section>
        <div className='text-[0.6875rem] font-bold -tracking-[0.42px]'>
          {gameType}
        </div>
        <div className='text-[0.6875rem] text-[#555] -tracking-[0.42px]'>
          {fromNow(createDate)}
        </div>
      </section>

      <div
        className='w-[1.6875rem] h-[1px] mt-[0.1875rem] mb-[0.3125rem] mx-auto'
        style={{
          backgroundColor: isWin ? '#94b9d6' : '#d0a6a5'
        }}></div>

      <section>
        <div
          className='text-[0.6875rem] text-[#555] -tracking-[0.42px] font-bold'
          style={{
            color: isWin ? '#2c709b' : '#d0021b'
          }}>
          {isWin ? '승리' : '패배'}
        </div>
        <div className='text-[0.6875rem] text-[#555] -tracking-[0.42px]'>
          {getDuration(gameLength)}
        </div>
      </section>
    </section>
  );
}
