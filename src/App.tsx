import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import { Pages } from '@/pages';
import { GlobalStyle } from '@/styles/globalStyle';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Pages />
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};
