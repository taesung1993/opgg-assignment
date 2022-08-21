import { IPreviousTier } from '../../models/interfaces/PreviousTier';

interface Props {
  previousTiers: IPreviousTier[];
}

export default function ProfileTiers({ previousTiers }: Props) {
  return (
    <ul className='flex items-center pl-2.5 mb-2.5'>
      {previousTiers.map((tier) => (
        <li
          key={`s-${tier.season}`}
          className='group bg-greyish-three h-5 px-[0.3125rem] pt-1 pb-[0.1875rem] border border-border text-xs text-[#657070] flex items-center justify-center rounded-sm relative cursor-pointer mx-[0.4375rem]'>
          <span className='font-bold'>S{tier.season}</span>
          &nbsp;
          <span>{tier.tier}</span>
          <div className='absolute bottom-full mb-3 hidden group-hover:flex group-hover:flex-col'>
            <div className='relative text-white bg-black whitespace-nowrap z-10 p-4'>
              <div>{tier.string}</div>
              <div className='absolute -z-10 w-3 h-3 bg-black rotate-45 -bottom-[6px] left-1/2 -translate-x-1/2'></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
