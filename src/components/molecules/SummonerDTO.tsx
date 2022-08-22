import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { AsyncData } from '../../models/interfaces/AsyncData';
import { ILeague } from '../../models/interfaces/League';
import States from '../../states';
import Molecules from './index';
import Atoms from '../atoms';

export default function SummonerDTO() {
  const { status, data } = useRecoilValue(States.SummonerProfile);
  const leagues = useMemo<AsyncData<ILeague[]>>(() => {
    if (status === 'loading') {
      return {
        status,
        data
      };
    }

    if (status === 'error') {
      return {
        status,
        data
      };
    }

    return {
      status,
      data: data.leagues
    };
  }, [status]);

  return (
    <section className='flex w-full max-w-opgg mx-auto'>
      <section className='w-[18.75rem] mr-2.5 pt-2.5'>
        <Atoms.SummonerLeagues {...leagues} />
        <Molecules.WinRates />
      </section>
      <section className='flex-1'>
        <Molecules.SummonerGameTotal />
      </section>
    </section>
  );
}
