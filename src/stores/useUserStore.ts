import { loginByPhone } from '@/api/account'
import { getLoginStatus } from '@/api/user'
import type { UserProfile } from '@/typing/user.type'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      cookie: '',
      showLogin: false,
      profile: {} as UserProfile
    }
  },
  getters: {
    isLogin: (state) => {
      return state.profile.userId > 0
    }
  },
  actions: {
    async handleLogin(phone: string, password: string) {
      const res = await loginByPhone(phone, password)
      this.token = res.token
      this.cookie = res.cookie
      document.cookie = res.cookie
      localStorage.setItem('USER-TOKEN', this.token)
      localStorage.setItem('USER-COOKIE', this.cookie)
      await this.checkLogin()
      this.showLogin = false
    },
    async checkLogin() {
      const res = await getLoginStatus()
      console.log(res)

      this.profile = res.profile
    }
  }
})
