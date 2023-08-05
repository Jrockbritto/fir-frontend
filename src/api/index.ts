import { api, URL } from './config'
import { RequestProps } from './typings'

export function Api() {
  function request({
    path,
    options: { method = 'GET', body, config }
  }: RequestProps) {
    api.defaults.baseURL = URL

    return api({
      method,
      url: path,
      data: body,
      ...config
    })
  }

  return {
    request
  }
}
