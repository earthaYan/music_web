import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
export const contentType = {
  urlencoded: 'application/x-www-form-urlencoded',
  formData: 'multipart/form-data',
  json: 'application/json'
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  timeout: 3000,
  withCredentials: true
})
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
export default instance

const request = (config: AxiosRequestConfig) => {
  return new Promise((resolve, reject) => {
    try {
      instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    } catch (err) {
      return Promise.reject(err)
    }
  })
}

export const $get = <T = any>(
  url: string,
  params: any = {},
  options?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve: any, reject: any) => {
    instance
      .get(url, { ...options, params: params })
      .then((res: any) => {
        resolve(res.data)
      })
      .catch((error: any) => {
        if (options && 'responseType' in options && options.responseType === 'blob') {
          const reader = new FileReader()
          reader.readAsText(error.data, 'utf-8')

          reader.onloadend = (event) => {
            reject({
              data: event.target?.result ?? event.target?.error ?? ''
            })
          }
        } else {
          reject(error)
        }
      })
  })
}

export const $post = <T = any>(
  url: string,
  data: any,
  options?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
