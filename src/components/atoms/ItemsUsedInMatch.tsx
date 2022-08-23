import { useRecoilValue } from 'recoil';
import { IItem } from '../../models/interfaces/Item';
import States from '../../states';
import Icons from '../icons';

interface Props {
  isWin: boolean;
  items: IItem[];
  controlWards: number;
}

export default function ItemUsedInMatch({ items, isWin, controlWards }: Props) {
  const backgroundColor = isWin ? '#7aa5c3' : '#cb9e9a';
  const build_src = isWin
    ? 'https://s-lol-web.op.gg/static/images/icon/common/icon-buildblue-p.png?v=1661142461415'
    : 'https://s-lol-web.op.gg/static/images/icon/common/icon-buildred-p.png?v=1661142461415';
  return (
    <section className='w-[5.875rem] pt-[0.9375rem]'>
      <ul className='grid grid-cols-4 gap-0.5 w-full h-[2.875rem] mb-[0.4375rem]'>
        <li
          className='first h-[1.375rem] rounded-sm cursor-pointer'
          style={{
            backgroundColor
          }}>
          <Item item={items[0]} />
        </li>
        <li
          className='second h-[1.375rem] rounded-sm cursor-pointer'
          style={{
            backgroundColor
          }}>
          <Item item={items[1]} />
        </li>
        <li
          className='thrid h-[1.375rem] rounded-sm cursor-pointer'
          style={{
            backgroundColor
          }}>
          <Item item={items[2]} />
        </li>
        <li
          className='seven h-[1.375rem] rounded-sm cursor-pointer'
          style={{
            backgroundColor
          }}>
          <Item item={items[6]} />
        </li>
        <li
          className='four h-[1.375rem] rounded-sm cursor-pointer'
          style={{
            backgroundColor
          }}>
          <Item item={items[3]} />
        </li>
        <li
          className='fifth h-[1.375rem] rounded-sm cursor-pointer'
          style={{
            backgroundColor
          }}>
          <Item item={items[4]} />
        </li>
        <li
          className='sixth h-[1.375rem] rounded-sm cursor-pointer'
          style={{
            backgroundColor
          }}>
          <Item item={items[5]} />
        </li>
        <li className='build h-[1.375rem] rounded-sm relative group cursor-pointer'>
          <img src={build_src} />
          <div className='absolute w-12 h-auto left-1/2 -translate-x-1/2 bottom-full mb-3 hidden group-hover:inline'>
            <div className='relative text-white bg-[#222727] z-10 p-2.5'>
              <div className='text-[0.6875rem] text-center leading-[0.6875rem]'>
                빌드
              </div>
              <div className='absolute -z-10 w-3 h-3 bg-[#222727] rotate-45 -bottom-[6px] left-1/2 -translate-x-1/2'></div>
            </div>
          </div>
        </li>
      </ul>
      <div className='flex items-center justify-center'>
        <span className='mr-1'>
          {isWin ? <Icons.WinWard /> : <Icons.LoseWard />}
        </span>
        <span className='text-[0.6875rem] -tracking-[0.42px] text-[#000]'>
          제어 와드 {controlWards}
        </span>
      </div>
    </section>
  );
}

function Item({ item }: { item: IItem }) {
  const { status, data } = useRecoilValue(States.ItemsDetail);
  if (!item) {
    return <></>;
  }
  const itemId = item.imageUrl
    .replace('https://opgg-static.akamaized.net/images/lol/item/', '')
    .split('.')[0];
  const itemDetail = status === 'success' ? data[itemId] : null;

  return (
    <div className='group relative w-full h-full'>
      <img
        className='w-full h-full rounded-sm'
        src={item.imageUrl}
        alt='usedItem'
      />

      {itemDetail ? (
        <div className='absolute left-1/2 -translate-x-1/2 bottom-full mb-3 hidden group-hover:inline w-[max-content] max-w-[17.5rem]'>
          <div className='relative text-white bg-[#222727] z-10 p-2.5'>
            <div className='text-[0.6875rem]'>
              <div>{itemDetail.name}</div>
              <p>{itemDetail.plaintext}</p>
            </div>
            <div className='absolute -z-10 w-3 h-3 bg-[#222727] rotate-45 -bottom-[6px] left-1/2 -translate-x-1/2'></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
