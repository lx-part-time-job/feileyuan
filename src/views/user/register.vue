<template>
    <div class="bg-wrap">
        <div class="con-wrap">
            <div class="left">
                <p class="title">会员注册</p>
                <ul class='tab'>
                  <li class="cursor" @click='tab = 1' :class="tab == 1 ? 'active' : ''">通过短信注册</li>
                  <li class="cursor" @click='tab = 2' :class="tab == 2 ? 'active' : ''">通过邮箱注册</li>
                </ul>
                <div class="tab1" v-if='tab == 1'>
                  <div class="phone">
                      <div>
                          <img src="/img/user/icon-phone.png" alt="">
                      </div>
                      <input v-model="loginName" type="tel" placeholder="请输入的你的手机号码" />
                  </div>
                  <div class="phone">
                      <div>
                          <img class="password" src="/img/user/icon-lock.png" alt="">
                      </div>
                      <input v-model="passWord" type="password" placeholder="密码(6-20位字母与字母或符号组成)" />
                  </div>
                  <div class="phone">
                      <div>
                          <img class="password" src="/img/user/icon-lock.png" alt="">
                      </div>
                      <input v-model="surePassword" type="password" placeholder="请重复密码" />
                  </div>
                  <div class="phone">
                      <input class="code-input" v-model="verificationCode" type="text" placeholder="输入验证码" />
                      <div class="get-code cursor">
                        <span>点击获取验证码</span>
                      </div>
                  </div>
                </div>
                <div class="tab2 tab1" v-if='tab == 2'>
                  <div class="phone">
                      <div>
                          <img src="/img/user/icon-phone.png" alt="">
                      </div>
                      <input v-model="loginName" type="tel" placeholder="请输入的你的手机号码" />
                  </div>
                  <div class="phone">
                      <div>
                          <img class="password" src="/img/user/icon-lock.png" alt="">
                      </div>
                      <input v-model="passWord" type="password" placeholder="密码(6-20位字母与字母或符号组成)" />
                  </div>
                  <div class="phone">
                      <div>
                          <img class="password" src="/img/user/icon-lock.png" alt="">
                      </div>
                      <input v-model="surePassword" type="password" placeholder="请重复密码" />
                  </div>
                  <div class="phone">
                      <div>
                          <img class="email" src="/img/user/icon-email.png" alt="">
                      </div>
                      <input v-model="surePassword" type="password" placeholder="输入邮箱验证码" />
                  </div>
                </div>
                <div class="login-btn cursor" @click='login'>确认注册</div>
                <div class="already">已有账号？<span class="cursor" @click='$router.push("/login")'>马上登录</span></div>
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
            // loginName: "18616876125",
            loginName:'',
            // passWord: "123456"
            passWord:'',
            surePassword:'',
            verificationCode:'',
            checked:false,
            tab:1,
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
        padding: 0 206px 0 212px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        .left{
            width: 50%;
            padding-right: 30px;
            .title{
                font-size: 24px;
                color: #FFFFFF;
                padding: 142px 0 55px 0;
                font-weight: 600;
                text-align: center;
            }
            .tab{
              display: flex;
              justify-content: center;
              text-align: center;
              color: #fff;
              font-size: 16px;
              line-height: 25px;
              >li{
                border-bottom: 1px solid #fff;
                text-align: center;
                width: 230px;
              }
              .active{
                font-weight: 600;
                border-bottom: 2px solid #fff;
              }
            }
            .tab1{
              padding-top: 35px;
              text-align: center;
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
                margin: 0 auto 20px;
                >div{
                    border-right: 1px solid #fff;
                    img{
                        width: 17px;
                        height: 25px;
                        margin-right: 17px;
                    }
                    .password{
                      width: 19px;
                      height: 22px;
                    }
                    .email{
                      width: 19px;
                      height: 15px;
                    }
                }
                .get-code{
                  border-right: none;
                  border-left: 1px solid #fff;
                  padding-left: 9px;
                  font-size: 14px;
                  color: #fff;
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
                .code-input{
                  width: 200px;
                }
                .eye{
                    padding-left: 20px;
                }
            }
            .phone:last-child {
                padding-bottom: 11px;
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
                margin: 35px auto 10px;
            }
            .already{
              text-align: center;
              color: #fff;
              font-size: 16px;
              span{
                color: #FFC766;
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
            margin-right: -30px;
            transform: translateY(-155%);
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
    font-size: 14px;
}
</style>