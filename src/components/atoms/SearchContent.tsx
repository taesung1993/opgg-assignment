import { AiOutlineInfoCircle, AiFillStar } from 'react-icons/ai';
import {
  getSummonerInLocal,
  isThatSummonerLiking,
  recordSummonerInLocal,
  removeSummonerInLocal
} from '../../controllers/localSummonerController';
import { ISummoner } from '../../models/interfaces/Summoner';
import { RiCloseFill } from 'react-icons/ri';
import { useCallback, useMemo, useState, MouseEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import States from '../../states';

interface Props {
  type: 'latest' | 'liked';
}

export default function SeachContent({ type }: Props) {
  return (
    <section className='flex flex-col justify-center items-center p-5'>
      {type === 'latest' ? <LatestList /> : <LikedList />}
    </section>
  );
}

function LatestList() {
  const [forceUpdate, setForceUpdate] = useState(false);
  const setSummonerName = useSetRecoilState(States.SummonerName);

  const latestList = useMemo(() => {
    return getSummonerInLocal('latest');
  }, [forceUpdate]);
  const changeScreen = useCallback((event: MouseEvent) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    const name = event.currentTarget.textContent;
    if (name) {
      setSummonerName(name);
    }
  }, []);

  const onLiked = useCallback(
    (event: MouseEvent, summoner: ISummoner) => {
      event.stopPropagation();
      if (isThatSummonerLiking(summoner)) {
        removeSummonerInLocal(summoner, 'liked');
        setForceUpdate(!forceUpdate);
        return;
      }
      recordSummonerInLocal(summoner, 'liked');
      setForceUpdate(!forceUpdate);
    },
    [forceUpdate]
  );

  const onRemove = useCallback(
    (event: MouseEvent, summoner: ISummoner) => {
      event.stopPropagation();
      removeSummonerInLocal(summoner, 'latest');
      setForceUpdate(!forceUpdate);
    },
    [forceUpdate]
  );

  if (latestList.length) {
    const unLikeColor = '#d1d5db';
    const likeColor = '#1ea1f7';

    return (
      <ul className='w-full'>
        {latestList.map((s) => (
          <li
            key={s.name}
            className='flex items-center'
            role='record-latest-summoner'>
            <div className='text-xs text-white font-bold bg-opgg py-[0.125rem] px-1 rounded-sm mr-4'>
              KR
            </div>
            <div
              className='flex-1
            cursor-pointer hover:text-opgg'
              onClick={changeScreen}>
              {s.name}
            </div>
            <div className='flex items-center'>
              <button
                onClick={(event) => onLiked(event, s)}
                role='search-like-button'>
                <AiFillStar
                  className='inline mb-0.5'
                  color={isThatSummonerLiking(s) ? likeColor : unLikeColor}
                />
              </button>
              <button
                className='ml-2'
                onClick={(event) => onRemove(event, s)}
                role='remove-like-button'>
                <RiCloseFill className='inline mb-0.5 fill-gray-300' />
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <AiOutlineInfoCircle />
      <div className='text-[#666666] text-xs mt-5'>
        최근에 본 소환사가 없습니다.
      </div>
    </>
  );
}

function LikedList() {
  const [forceUpdate, setForceUpdate] = useState(false);
  const setSummonerName = useSetRecoilState(States.SummonerName);

  const likedList = useMemo(() => {
    return getSummonerInLocal('liked');
  }, [forceUpdate]);

  const changeScreen = useCallback((event: MouseEvent) => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    const name = event.currentTarget.textContent;
    if (name) {
      setSummonerName(name);
    }
  }, []);

  const onRemove = useCallback(
    (event: MouseEvent, summoner: ISummoner) => {
      event.stopPropagation();
      removeSummonerInLocal(summoner, 'liked');
      setForceUpdate(!forceUpdate);
    },
    [forceUpdate]
  );

  if (likedList.length) {
    return (
      <ul className='w-full'>
        {likedList.map((s) => (
          <li
            key={s.name}
            className='flex items-center'
            role='record-liked-summoner'>
            <div className='text-xs text-white font-bold bg-opgg py-[0.125rem] px-1 rounded-sm mr-4'>
              KR
            </div>
            <div
              className='flex-1 hover:text-opgg cursor-pointer'
              onClick={changeScreen}>
              {s.name}
            </div>
            <div className='flex items-center'>
              <button
                className='ml-2'
                onClick={(event) => onRemove(event, s)}
                role='remove-liked-button'>
                <RiCloseFill className='inline mb-0.5 fill-gray-300' />
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }

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
