export interface IAsyncReduxData<T = any> {
  data?: T;
  isLoading?: boolean;
  error?: Error;
}
