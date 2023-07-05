import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export function axiosLogInterceptor(axios: AxiosInstance) {
  let count = 0;

  function transformRequest(request: AxiosRequestConfig) {
    const data = {
      on: "request",
      url: `${request.baseURL}${request.url}`,
      method: request.method,
      headers: request.headers,
      data: request.data,
      id: (request as any).__count,
    };
    return data;
  }
  //  Comment test 111111231//////
  function transformResponse(response: AxiosResponse) {
    const startTime = (response.config as any).__startTime;
    const endTime = new Date().getTime();
    const duration = endTime - startTime;

    return {
      ...transformRequest(response.config),
      on: "response",
      status: response.status,
      data: response.data,
      duration,
    };
  }

  axios.interceptors.request.use(
    (request) => {
      (request as any).__startTime = new Date().getTime();
      (request as any).__count = count++;
      console.log(transformRequest(request));
      return request;
    },
    (error) => {
      if (error.request) {
        console.error(transformRequest(error.request));
      }
      return Promise.reject(error);
    }
  );
  axios.interceptors.response.use(
    (response) => {
      console.log(transformResponse(response));
      return response;
    },
    (error) => {
      if (error.response) {
        console.error(transformResponse(error.response));
      }
      return Promise.reject(error);
    }
  );
}
