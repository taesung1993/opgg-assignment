import { Suspense } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { RecoilRoot } from 'recoil';
import Pages from './components/pages';
import 'react-circular-progressbar/dist/styles.css';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <RecoilRoot>
            <Pages.Home />
          </RecoilRoot>
        </Suspense>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
