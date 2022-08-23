import { IItem } from '../../models/interfaces/Item';
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
          className='first h-[1.375rem] rounded-sm overflow-hidden'
          style={{
            backgroundColor
          }}>
          <Item item={items[0]} />
        </li>
        <li
          className='second h-[1.375rem] rounded-sm overflow-hidden'
          style={{
            backgroundColor
          }}>
          <Item item={items[1]} />
        </li>
        <li
          className='thrid h-[1.375rem] rounded-sm overflow-hidden'
          style={{
            backgroundColor
          }}>
          <Item item={items[2]} />
        </li>
        <li
          className='seven h-[1.375rem] rounded-sm overflow-hidden'
          style={{
            backgroundColor
          }}>
          <Item item={items[6]} />
        </li>
        <li
          className='four h-[1.375rem] rounded-sm overflow-hidden'
          style={{
            backgroundColor
          }}>
          <Item item={items[3]} />
        </li>
        <li
          className='fifth h-[1.375rem] rounded-sm overflow-hidden'
          style={{
            backgroundColor
          }}>
          <Item item={items[4]} />
        </li>
        <li
          className='sixth h-[1.375rem] rounded-sm overflow-hidden'
          style={{
            backgroundColor
          }}>
          <Item item={items[5]} />
        </li>
        <li className='build h-[1.375rem] rounded-sm overflow-hidden'>
          <img src={build_src} />
        </li>
      </ul>
      <div className='flex items-center'>
        <span className='mr-0.5'>
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
  if (!item) {
    return <></>;
  }

  return (
    <div className='w-full h-full'>
      <img className='w-full h-full' src={item.imageUrl} alt='usedItem' />
    </div>
  );
}
