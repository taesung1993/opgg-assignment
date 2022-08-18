import Molecules from '../molecules';

export default function Header() {
  return (
    <header role='header' className='h-header bg-opgg'>
      <section className='w-full h-full max-w-opgg mx-auto px-4 py-[0.75rem] flex justify-end items-end'>
        <Molecules.Search />
      </section>
    </header>
  );
}
