import { QueryClient } from "react-query";

const QueryProvider = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 30 * 1000, // 30 Seconds stale time
    },
  },
});

export { QueryProvider };
