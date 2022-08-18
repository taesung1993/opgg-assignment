import Atoms from '../atoms';

export default function Search() {
  return (
    <div className='w-[16.25rem] h-8 flex items-center bg-white py-2 px-[0.875rem] relative'>
      <Atoms.SearchInput />
      <Atoms.SearchButton />
    </div>
  );
}
