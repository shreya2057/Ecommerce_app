import Cookie from "js-cookie";

const getToken = (tokenName: string) => {
  return Cookie.get(tokenName);
};

const setToken = (tokenName: string, token: string) => {
  return Cookie.set(tokenName, token);
};

const removeToken = (tokenName: string) => {
  return Cookie.remove(tokenName);
};

export const TokenService = { getToken, setToken, removeToken };
