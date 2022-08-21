import Atoms from './index';

interface Props {
  thumbnail: {
    src: string;
    alt: string;
  };
  frame: {
    src: string;
    alt: string;
  };
  level: number;
}

export default function Thumbnail({ thumbnail, frame, level }: Props) {
  return (
    <div
      className={
        'relative w-[7.5rem] h-[7.5rem] flex justify-center items-center mr-[1.0625rem]'
      }>
      <img
        src={frame.src}
        alt={`${frame.alt}'s border images`}
        className='absolute top-0 left-0 w-[7.5rem] h-[7.5rem]'
      />
      <div className='profile w-[6.25rem] h-[6.25rem] relative'>
        <img
          src={thumbnail.src}
          alt={`${thumbnail.alt}'s images`}
          className='absolute top-0 left-0 w-full h-full'
        />
        <Atoms.LevelBadge level={level} />
      </div>
    </div>
  );
}
