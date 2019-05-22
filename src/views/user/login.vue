<template>
    <div class="bg-wrap">
        <div class="inner">
            
        </div>
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
                if (res.data.code == 0) {
                    // 登陆成功
                    let userInfo = {
                        token: res.data.data,
                    }
                    this.$setCookie("uInfo", JSON.stringify(userInfo));
                } else {
                    this.$message.error(res.data.msg)
                }
            })
        }
    }
}
</script>
<style scoped lang="scss">
.bg-wrap{
    background: url('./../../../public/img/user/footer-bg.png') no-repeat bottom center;
    width: 100%;
    min-height: 415px;
    background-size: 100%;
}
</style>