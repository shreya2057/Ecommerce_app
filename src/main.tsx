import React from 'react'
import ReactDOM from 'react-dom/client';
import AppRouter from './router/router.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import useCartStore from './stores/cartStore.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ChakraProvider>
        <AppRouter />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
