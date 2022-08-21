import { QueryKey, useQueryClient } from 'react-query';
import { ISummoner } from '../../models/interfaces/Summoner';
import Atoms from '../atoms';

export default function Profile() {
  const client = useQueryClient();
  const quries: [QueryKey, ISummoner][] = client.getQueriesData('summoner');
  const [_, summoner] = quries.slice(-1)[0];
  console.log(summoner.profileBorderImageUrl);

  return (
    <section className='border-b border-b-[#d8d8d8] pb-3.5 pt-[0.9375rem]'>
      <section className='w-full max-w-opgg mx-auto px-4'>
        <Atoms.PreviousTiers previousTiers={summoner.previousTiers} />
        <section className='flex'>
          <Atoms.Thumbnail
            thumbnail={{
              src: summoner.profileImageUrl,
              alt: `${summoner.name}'s thumbnail`
            }}
            frame={{
              src: summoner.profileBorderImageUrl,
              alt: `${summoner.name}'s frame`
            }}
            level={summoner.level}
          />
          <Atoms.ProfileShortInfo
            name={summoner.name}
            ladderRank={summoner.ladderRank.rank}
            rankPercentOfTop={summoner.ladderRank.rankPercentOfTop}
          />
        </section>
      </section>
    </section>
  );
}
