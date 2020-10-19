// TODO: move this to env file
const BASE_URL = "http://localhost:3001";

const callback = <T>(
  fetchFunction: Promise<Response>,
  resolve: (value?: T) => void,
  reject: (reason?: any) => void
) =>
  fetchFunction.then((res) => {
    if (200 <= res.status && res.status < 300) resolve(res.json() as any);
    else reject(new Error(res.statusText));
  }, reject);

const apiServiceGet = <T = any>(url: string): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    callback<T>(fetch(`${BASE_URL}${url}`), resolve, reject);
  });

const apiServiceDelete = <T = any>(url: string): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    callback<T>(
      fetch(`${BASE_URL}${url}`, { method: "DELETE" }),
      resolve,
      reject
    );
  });

const apiServicePost = <T = any>(url: string, params: any = {}): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    callback<T>(
      fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }),
      resolve,
      reject
    );
  });

const apiServicePut = <T = any>(url: string, params: any = {}): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    callback<T>(
      fetch(`${BASE_URL}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      }),
      resolve,
      reject
    );
  });

export const apiService = {
  get: apiServiceGet,
  delete: apiServiceDelete,
  post: apiServicePost,
  put: apiServicePut,
};
