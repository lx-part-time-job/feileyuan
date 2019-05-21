<template>
    <div>
        <label for="loginName">
            用户名：
            <input v-model="loginName" type="text" id="loginName" />
        </label>
        <label for="passWord">
            密码：
            <input v-model="passWord" type="password" id="passWord" />
        </label>
        <button type="submit" @click="login">登录</button>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            loginName: "18616876125",
            passWord: "123456"
        }
    },
    methods: {
        login() {
            this.$axios.post('/users/login', {
                loginName: this.loginName,
                passWord: this.passWord
            }).then(res => {
                
            })
        }
    }
}
</script>
<style scoped>
</style>