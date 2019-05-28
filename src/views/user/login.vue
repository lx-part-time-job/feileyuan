<template>
    <div class="bg-wrap">
        <div class="con-wrap">
            <div class="left">
                <p class="title">欢迎菲乐园！</p>
                <p class="sub-title">Welcome to Fei Paradise.</p>
                <div class="phone">
                    <div>
                        <img src="/img/user/icon-phone.png" alt="">
                    </div>
                    <input v-model="loginName" type="tel" id="loginName" placeholder="请输入的你的手机号码" />
                </div>
                <div class="phone">
                    <div>
                        <img src="/img/user/icon-lock.png" alt="">
                    </div>
                    <input v-model="passWord" type="password" id="passWord" placeholder="6-20位字母与字母或符号组成" />
                    <img class="eye" src="/img/user/icon-eye.png" alt="">
                </div>
                <div class="rember">
                    <div>
                        <div class="checked cursor" @click='rember'>
                            <span v-show='checked' class="iconfont icon-duihao"></span>
                        </div>
                        <span class="tip">下次自动登录</span>
                    </div>
                    <div>
                        <span class="cursor forget" @click='$router.push("/findPassword")'>忘记密码？</span>
                    </div>
                </div>
                <div class="login-btn" @click='login'>登录</div>
                <div class="register">
                    还没有账号？点击<span class="cursor" @click='$router.push("/register")'>立即注册</span>
                </div>
            </div>
            <div class="right">
                <div class="other-login">
                    <div class="left-line"></div>
                    <div>其他登录方式</div>
                    <div class="right-line"></div>
                </div>
                <div class="other-icon">
                    <div class="qq cursor">
                        <span class="iconfont icon-qq1"></span>
                    </div>
                    <div class="qq cursor">
                        <span class="iconfont icon-weixin1"></span>
                    </div>
                    <div class="qq cursor">
                        <span class="iconfont icon-weibo1"></span>
                    </div>
                </div>
                <div class="qr"></div>
                <div class="ewm">扫码下载APP</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            loginName:'',
            passWord:'',
            checked:false
        }
    },
    methods: {
        login() {
            let that = this;
            this.$axios.post('/users/login', {
                loginName: this.loginName,
                passWord: this.passWord
            }).then(res => {
                if (res.data.code == 0) {
                    // 登陆成功
                    let userInfo = {
                        token: res.data.data,
                        loginName: that.loginName,
                    }
                    that.$setCookie("uInfo", JSON.stringify(userInfo));
                    window.location.replace("/");
                } else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        rember(){
            this.checked = !this.checked;
        }
    }
}
</script>
<style scoped lang="scss">
.bg-wrap{
    background: url(/img/user/footer-bg.png) no-repeat bottom center;
    width: 100%;
    min-height: 415px;
    background-size: 100%;
    padding-bottom: 195px;
    .con-wrap{
        background: url(/img/user/block-bg.png) no-repeat center center;
        width: 1400px;
        height: 690px;
        background-size: 100% 100%;
        margin: 118px auto 0; 
        padding: 0 206px 0 266px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        .left{
            width: 50%;
            .title{
                font-size: 40px;
                color: #FFFFFF;
                padding: 162px 0 8px 0;
            }
            .sub-title {
                font-size: 14px;
                color: #fff;
                margin-bottom: 62px;
            }
            .phone{
                width:350px;
                height:48px;
                background: rgba(255,255,255,.1);
                border:1px solid rgba(255,255,255,1);
                border-radius:24px;
                padding: 9px 10px 9px 24px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                margin-bottom: 20px;
                >div{
                    border-right: 1px solid #fff;
                    img{
                        width: 17px;
                        height: 25px;
                        margin-right: 17px;
                    }
                }
                input{
                    width: 255px;
                    padding-left: 17px;
                    background: rgba(255,255,255,0);
                    height: 100%;
                    outline: none;
                    border: 0;
                    color: #fff;
                    font-size: 16px;
                }
                .eye{
                    padding-left: 20px;
                }
            }
            .phone:last-child {
                padding-bottom: 11px;
            }
            .rember{
                width: 350px;
                color: #fff;
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .checked{
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                    border: 1px solid #fff;
                    margin-right: 4px;
                    vertical-align: middle;
                    .icon-duihao{
                        font-size: 16px;
                        color: #fff;
                        display: inline-block;
                    }
                }
                .tip{
                    vertical-align: middle;
                }
                .forget{
                    color: #FFC766;
                }
            }
            .login-btn {
                width: 350px;
                height: 48px;
                border-radius: 24px;
                background: #fff;
                color: #0077FF;
                font-size: 20px;
                line-height: 48px;
                text-align: center;
                margin-top: 35px;
                margin-bottom: 10px;
            }
            .register{
                font-size: 16px;
                width: 350px;
                text-align: center;
                color: #ddd;
                span{
                    color: #FFDD66;
                    border-bottom: 1px solid #FFDD66;
                }
            }
        }
        .left:after{
            width: 1px;
            height: 235px;
            display: inline-block;
            content: '';
            background: #fff;
            float: right;
            transform: translateY(-120%);
        }
        .right{
            width: 50%;
            .other-login{
                text-align: center;
                font-size: 20px;
                color: #fff;
                margin-top: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 60px;
                .left-line{
                    width:150px;
                    height:1px;
                    background:linear-gradient(-90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
                }
                .right-line{
                    width:150px;
                    height:1px;
                    background:linear-gradient(90deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
                }
            }
            .other-icon{
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 85px;
                .qq{
                    margin-right: 50px;
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0);
                    border: 1px solid #fff;
                    text-align: center;
                    line-height: 56px;
                    box-shadow:2px 2px 5px rgba(0, 0, 0, 0.14);
                    span{
                        font-size: 36px;
                    }
                }
                .qq:last-child{
                    margin-right: 0;
                }
            }
            .qr{
                width: 120px;
                height: 120px;
                background: #fff;
                margin: 0 auto;
                margin-bottom: 15px;
            }
            .ewm{
                text-align: center;
                color: #fff;
                font-size: 16px;
            }
        }
    }
}
input::-webkit-input-placeholder {
    color: #fff;
    font-size: 16px;
}
</style>