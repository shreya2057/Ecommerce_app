import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/AppRoutes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { QueryProvider } from "./providers/ReactQuery.tsx";
// import useCartStore from './stores/cartStore.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={QueryProvider}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
