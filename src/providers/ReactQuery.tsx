import { QueryClient } from "react-query";

const QueryProvider = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 30 * 1000, // 30 Seconds stale time
    },
  },
});

export { QueryProvider };
