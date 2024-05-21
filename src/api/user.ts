import { $get } from './serviceBase'

export const getUserDetail = (params: { uid: string }) => {
  return $get('/user/detail', params)
}

export const getLoginStatus = () => {
  return $get('/login/status').then((res) => {
    return {
      account: res.data.account,
      profile: res.data.profile
    }
  })
}
