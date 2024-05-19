import type { UserProfile } from '@/typing/user.type'
import { $get, $post } from './serviceBase'

// 二维码key生成接口
export const getQRCodeKey = async (): Promise<{
  unikey: string
}> => {
  return $get('/login/qr/key', {
    timeStamp: Date.now()
  }).then((res) => {
    return {
      unikey: res.data.unikey
    }
  })
}
// 二维码生成接口
export const generateQRCode = (params: {
  key: string
  qrimg?: boolean
}): Promise<{
  qrimg: string
  qrurl: string
}> => {
  return $get('/login/qr/create', {
    ...params,
    timeStamp: Date.now()
  }).then((res) => {
    return {
      qrimg: res.data.qrimg,
      qrurl: res.data.qrurl
    }
  })
}
// 二维码检测扫码状态接口
//800过期，801等待扫码，802待确认，803授权登录成功
// 803会同时返回cookie

export const getQRCodeStatus = (params: {
  key: string
  noCookie?: boolean
}): Promise<{
  code: number
  cookie: string
  message: string
}> => {
  return $get('/login/qr/check', { ...params, timeStamp: Date.now() })
}

//刷新登录状态并返回新的cookie
export const refreshLoginStatus = () => {
  return $get('/login/refresh')
}
//退出登录
export const logout = () => {
  return $get('/logout')
}

export const getAccountInfo = () => {
  return $get('/user/account')
}

export const loginByPhone = (
  phone: string,
  password: string
): Promise<{
  cookie: string
  token: string
  profile: UserProfile
}> => {
  return $get('/login/cellphone', { phone: phone, password: password })
}
