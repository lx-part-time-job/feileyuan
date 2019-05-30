<template>
  <div class="bbs-header-container">
    <div class="inner cb">
      <router-link class="logo-wrapper fl" to="/" tag="div">
        <img src="../../assets/images/home/nav/logo.png" alt>
      </router-link>
      <!-- 搜索框部分 预留 menu -->
      <div class="cb fl">
        <div class="search bbs-search fl">
          <el-input
            class="fl"
            suffix-icon="el-icon-search"
            placeholder="请输入您要搜索的关键字"
            v-model="keywords"
          ></el-input>
        </div>
        <div class="fl menu-container">
          <div>
            <img src="../../assets/images/home/nav/menu.png" alt>
          </div>
        </div>
      </div>
      <!-- 登录注册&&已经登陆 -->
      <div class="bbs-header-right fr">
        <!-- 未登录 -->
        <div class="fl cb" v-if="islogin==false">
          <div class="welcome fl">欢迎来到菲乐园</div>
          <router-link to="/register" tag="div" class="fl btn set-up">注册</router-link>
          <router-link to="/login" tag="div" class="fl btn set-in">登录</router-link>
          <router-link to="/findPassword" tag="div" class="fl find-password">忘记密码</router-link>
        </div>
        <!-- 已登录 -->
        <div class="fl cb" v-if="islogin==true">
          <div class="user fr ov">
            <router-link to class="ov">
              <img src="../../assets/images/home/nav/head_img.png" class="fl" alt>
              <div class="fl info-container">
                <h4 class="username">死掉的鱼</h4>
                <div class="userlevel">
                  <img src="../../assets/images/home/nav/level_8.png" alt class="inline">
                  <span class="inline">经验：2328</span>
                </div>
              </div>
            </router-link>
            <router-link to>
              <img src="../../assets/images/home/nav/chat.png" alt class="icon">
            </router-link>
            <router-link to>
              <img src="../../assets/images/home/nav/friend.png" alt class="icon">
            </router-link>
            <router-link to>
              <img src="../../assets/images/home/nav/setting.png" alt class="icon">
            </router-link>
            <img src="../../assets/images/home/nav/quit.png" alt class="icon" @click="quit()">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: "",
      islogin: true
    };
  },
  methods: {
    quit() {
      try {
        let uInfo = JSON.parse(this.$getCookie("uInfo"));
        let that = this;
        console.log(uInfo);
        if (uInfo && uInfo.loginName) {
          this.$axios
            .post(
              "/users/logout",
              {},
              {
                headers: {
                  loginName: uInfo.loginName
                }
              }
            )
            .then(res => {
              if (res.data.code == 0) {
                that.$delCookie("uInfo");
                that.$message({
                  message: "退出成功",
                  type: "success",
                  duration: 2000,
                  onClose() {
                    that.$router.go(0);
                  }
                });
              }
            });
        }
      } catch (e) {
        // statements
        console.log(e);
      }
    },
    isloginFun() {
      let userInfo = this.$getCookie("uInfo");
      userInfo ? (this.islogin = true) : (this.islogin = false);
    }
  },
  mounted() {
    this.isloginFun();
  }
};
</script>
<style lang="scss" scoped>
.bbs-header-container {
  background: #fff;
}
.search {
  margin-top: 19px;
  margin-left: 48px;
  .el-input {
    background: #f0f0f0;
    width: 430px;
  }
}
.bbs-header-right {
  height: 40px;
  margin-top: 20px;
  .welcome {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);
    line-height: 18px;
    line-height: 40px;
  }
  .btn {
    width: 107px;
    height: 40px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    line-height: 40px;
    background: rgba(0, 91, 194, 1);
    box-shadow: 0px 2px 0px 0px rgba(0, 83, 178, 1);
    border-radius: 4px;
    margin-left: 20px;
    &.set-in {
      background: rgba(94, 181, 74, 1);
      box-shadow: 0px 2px 0px 0px rgba(0, 83, 178, 1);
      border-radius: 4px;
    }
  }
  .find-password,
  .set-up,
  .set-in {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .find-password {
    font-size: 14px;
    font-weight: 400;
    text-decoration: underline;
    color: rgba(85, 85, 85, 1);
    line-height: 42px;
    margin: 0 20px;
    &:hover {
      color: rgba(0, 91, 194, 1);
    }
  }
  .icon {
    display: inline-block;
    margin-left: 20px;
  }
  .username {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    font-weight: bold;
    color: rgba(0, 91, 194, 1);
    line-height: 21px;
    margin-bottom: 5px;
  }
  .userlevel {
    & > * {
      vertical-align: top;
      display: inline-block;
      font-size: 12px;
      line-height: 15px;
    }
    & img {
      margin-right: 5px;
    }
  }
  .info-container {
    width: 180px;
    margin-left: 19px;
    margin-right: 60px;
  }
}
</style>
<style lang="scss">
.bbs-search {
  .el-input__inner {
    width: 430px;
    height: 40px;
    background: rgba(240, 240, 240, 1);
    border: 1px solid rgba(153, 153, 153, 1);
    border-radius: 4px;
    padding-left: 19px;
  }
}
.menu-container {
  position: relative;
  margin-top: 30px;
  margin-left: 24px;
}
</style>
