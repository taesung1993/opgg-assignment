interface Props {
  level: number;
}

export default function LevelBadge({ level }: Props) {
  return (
    <div className='absolute left-1/2 -bottom-[0.75rem] -translate-x-1/2 flex justify-center z-10'>
      <div className='realtive border-y-[0.75rem] border-y-[transparent] border-r-[0.625rem] border-r-[#2c3548] after:content-[""] after:absolute after:top-0 after:-left-[1px] after:border-y-[0.75rem] after:border-y-[transparent] after:border-r-[0.625rem] after:border-r-[#eabd56] after:-z-10'></div>
      <div className='relative w-6 h-6 flex items-center justify-center bg-[#2c3548] text-[#eabd56] text-sm border border-[#eabd56] border-x-0 -mx-[1px]'>
        {level}
      </div>
      <div className='relative border-y-[0.75rem] border-y-[transparent] border-l-[0.625rem] border-l-[#2c3548]  before:content-[""] before:absolute before:bottom-[-0.75rem] before:-right-[1px] before:border-y-[0.75rem] before:border-y-[transparent] before:border-l-[0.625rem] before:border-l-[#eabd56] before:-z-10'></div>
    </div>
  );
}
