import { Suspense } from 'react';
import Templates from '../templates';

export default function Home() {
  return (
    <Templates.Nested>
      <Suspense
        fallback={
          <div style={{ width: '300px', height: '300px', background: 'red' }}>
            hello
          </div>
        }>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </Suspense>
    </Templates.Nested>
  );
}
