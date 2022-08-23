import { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import Pages from './components/pages';
import 'react-circular-progressbar/dist/styles.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <RecoilRoot>
          <Pages.Home />
        </RecoilRoot>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
