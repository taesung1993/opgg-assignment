import { AiOutlineInfoCircle, AiFillStar } from 'react-icons/ai';
import { getSummonerInLocal } from '../../controllers/recordSummoner';

interface Props {
  type?: 'latest' | 'liked';
}

export default function SeachContent({ type }: Props) {
  if (type === 'latest') {
    const data = getSummonerInLocal(type);
    return (
      <section className='flex flex-col justify-center items-center p-5'>
        <EmptyLatest />
      </section>
    );
  }

  return (
    <section className='flex flex-col justify-center items-center p-5'>
      <EmptyPopular />
    </section>
  );
}

function EmptyLatest() {
  return (
    <>
      <AiOutlineInfoCircle />
      <div className='text-[#666666] text-xs mt-5'>
        최근에 본 소환사가 없습니다.
      </div>
    </>
  );
}

function EmptyPopular() {
  return (
    <>
      <AiOutlineInfoCircle />
      <div className='text-[#666666] text-xs mt-5 w-full'>
        <p className='w-full text-center'>
          관심있는 소환사에&nbsp;
          <AiFillStar className='inline mb-0.5 fill-gray-300' />
          &nbsp;즐겨찾기를 하여 편리하게 정보를 받아보세요.
        </p>
      </div>
    </>
  );
}
