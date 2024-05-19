import { loginByPhone } from '@/api/account'
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
      this.profile = res.profile
      this.showLogin = false
    }
  }
})
