import { ISpell } from '../../models/interfaces/Spell';

const exportNameFromImageUrl = (imageUrl: string) => {
  const IMAGE_URL = 'https://opgg-static.akamaized.net/images/lol/champion/';

  return imageUrl.replace(IMAGE_URL, '').split('.')[0];
};

export default function ChampionInMatchedList({
  imageUrl,
  name,
  spells,
  peak
}: {
  imageUrl: string;
  name: string;
  spells: ISpell[];
  peak: string[];
}) {
  return (
    <section className='mr-6'>
      <div className='flex items-center pt-[0.9375rem]'>
        <div className='w-[2.875rem] h-[2.875rem] rounded-full overflow-hidden mr-1.5'>
          <img
            className='w-full h-full rounded-full'
            src={imageUrl}
            alt={`${name}'s image`}
          />
        </div>
        <div className='flex gap-1'>
          <div className='flex flex-col gap-0.5'>
            {spells.map((spell, index) => (
              <div
                key={`spell-${index}`}
                className='w-[1.375rem] h-[1.375rem]  overflow-hidden rounded-[0.125rem]'>
                <img
                  className='w-full h-full'
                  src={spell.imageUrl}
                  alt={`${name}'s spell ${index}`}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-0.5'>
            {peak.map((peakImageUrl, index) => (
              <div key={`spell-${index}`} className='w-[1.375rem] h-[1.375rem]'>
                <img
                  className='w-full h-full'
                  src={peakImageUrl}
                  alt={`${peak}'s spell ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-[0.5625rem] text-[0.6875rem] -tracking-[0.42px] text-[#555] text-center font-apple'>
        {exportNameFromImageUrl(imageUrl)}
      </div>
    </section>
  );
}
