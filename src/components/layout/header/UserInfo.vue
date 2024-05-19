<template>
    <v-avatar size="18" color="grey-lighten-1" class="mr-2" :image="profile?.avatarUrl ?? ''" />
    <span v-if="isLogin">{{ profile.nickname }}</span>
    <v-btn v-else :flat="true" @click="showLogin = true">点击登录</v-btn>
    <v-dialog max-width="400" persistent v-model="showLogin">
        <v-card max-width="400" title="登陆表单">
            <v-form @submit.prevent class="pa-3">
                <v-text-field v-model="phone" label="用户名" :prepend-inner-icon="Phone" />
                <v-text-field v-model="password" label="密码" :prepend-inner-icon="Lock" />
                <v-card-actions class="d-flex justify-space-between mx-n3">
                    <v-btn @click="showLogin = false">关闭</v-btn>
                    <v-btn @click="loginSubmit" color="green" type="submit">登录</v-btn>
                </v-card-actions>

            </v-form>
        </v-card>
    </v-dialog>

</template>
<script setup lang="ts">
import { Lock, Phone } from '@icon-park/vue-next'

import { useUserStore } from '@/stores/useUserStore';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const { handleLogin } = useUserStore()
const { isLogin, profile, showLogin } = storeToRefs
    (useUserStore())
const phone = ref('')
const password = ref('')
const loginSubmit = () => {
    handleLogin(phone.value, password.value)
}
</script>