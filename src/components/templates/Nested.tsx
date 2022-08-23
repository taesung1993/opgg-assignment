import React, { ReactNode } from 'react';
import Organisms from '../organisms';

interface Props {
  children: ReactNode;
}

export default function Nested({ children }: Props) {
  return (
    <section className='min-h-screen flex flex-col'>
      <Organisms.Header />
      <main className='flex-1 pb-20'>{children}</main>
    </section>
  );
}
