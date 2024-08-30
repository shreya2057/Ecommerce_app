export const parseQueryString = (queryString: string) => {
  const queryData = queryString
    .replace("?", "")
    .split("&")
    .reduce((acc: Record<string, string>, current) => {
      const [key, value] = current.split("=");
      if (key && value) {
        acc[key] = value;
      }

      return acc;
    }, {});
  return queryData;
};
