import { useRecoilValue } from 'recoil';
import { ISummoner } from '../../models/interfaces/Summoner';
import States from '../../states';
import Atoms from '../atoms';

export default function SummonerProfile() {
  const { status, data } = useRecoilValue(States.SummonerProfile);

  if (status === 'loading') {
    return (
      <section className='border-b border-b-[#d8d8d8] pb-3.5 pt-[0.9375rem]'>
        <section className='w-full max-w-opgg mx-auto px-4'>
          <Skeleton />
        </section>
      </section>
    );
  }

  if (status === 'error') {
    return (
      <section
        className='border-b border-b-[#d8d8d8] pb-3.5 pt-[0.9375rem] bg-red-100'
        role='get-profile-error-box'>
        <section className='w-full max-w-opgg mx-auto px-4 '>
          <section className='w-full h-[11.25rem]'>
            <h1 className='text-red-500 text-xl font-bold'>[ERROR] {data}</h1>
            <p className='mt-1.5'>
              죄송합니다. 알수 없는 에러가 발생하였습니다.&nbsp;
              <a href='/' className='font-bold'>
                새로고침
              </a>
              을 시도해주세요.
            </p>
          </section>
        </section>
      </section>
    );
  }

  return (
    <section className='border-b border-b-[#d8d8d8] pb-3 pt-[0.9375rem]'>
      <section className='w-full max-w-opgg mx-auto px-4'>
        <Content summoner={data} />
      </section>
    </section>
  );
}

interface IContentProps {
  summoner: ISummoner;
}

function Content({ summoner }: IContentProps) {
  return (
    <>
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
    </>
  );
}

function Skeleton() {
  const badges = [1, 2, 3];
  return (
    <section role='profile-skeleton'>
      <ul className='flex items-center pl-2.5 mb-2.5'>
        {badges.map((id) => (
          <li
            key={`badge-${id}`}
            className='skeleton w-[3.625rem] h-5 px-[0.3125rem] pt-1 pb-[0.1875rem] border border-border text-xs text-[#657070] flex items-center justify-center rounded-sm mx-[0.4375rem] '></li>
        ))}
      </ul>
      <section className='flex'>
        <div className='skeleton w-[7.5rem] h-[7.5rem] mr-[1.0625rem]'></div>
        <div className='mt-[1.0625rem]'>
          <div className='skeleton w-[7.25rem] h-5 rounded-full mb-1'></div>
          <div className='skeleton w-40 h-5 rounded-full'></div>
        </div>
      </section>
    </section>
  );
}
