import React, { ReactNode } from 'react';
import Organisms from '../organisms';

interface Props {
  children: ReactNode;
}

export default function Nested({ children }: Props) {
  return (
    <section>
      <Organisms.Header />
      <main>{children}</main>
    </section>
  );
}
