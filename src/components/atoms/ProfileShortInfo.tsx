interface Props {
  name?: string;
  ladderRank: number;
  rankPercentOfTop: number;
}

export default function ProfileShortInfo({
  name,
  ladderRank,
  rankPercentOfTop
}: Props) {
  return (
    <div className='mt-[1.0625rem]'>
      <h1 className='text-[#242929] text-xl font-bold'>{name}</h1>
      <div className='text-[#657070] text-xs' role='profile-ladder-rank'>
        <span>레더 랭킹&nbsp;</span>
        <span>
          <strong>{ladderRank.toLocaleString()}</strong>위
        </span>
        <span>&nbsp;(상위 {rankPercentOfTop}%)</span>
      </div>
    </div>
  );
}
