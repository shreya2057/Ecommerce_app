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

const getTokenDetails = (tokenName: string) => {
  try {
    const token = getToken(tokenName);
    if (!token) return {};
    const decoded = JSON.parse(window.atob(token?.split(".")[1]));
    return decoded;
  } catch (e) {
    console.log(e);
  }
};

export const TokenService = {
  getToken,
  setToken,
  removeToken,
  getTokenDetails,
};
