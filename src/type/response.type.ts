export type APIResponseType<T> = {
  message: string;
  status: 200;
  data: T;
};

export type ErrorType = {
  message: string;
  status: number;
};
