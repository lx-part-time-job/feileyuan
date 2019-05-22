<template>
  <div class="edit-user-profile">
    <div class="part-left fl">
      <h3>个人基础信息</h3>
      <div class="avatar tc">
        <img class="img100" :src="avatar" alt="">
        <p>更改头像</p>
      </div>
    </div>
    <div class="part-right fl">123</div>
  </div>
</template>

<script>
  export default {
    name: "editUserProfile",
    data() {
      return {
        avatar: require('../../../../../src/assets/images/home/nav/head_img.png')
      }
    }
  }
</script>

<style scoped lang="scss">
  .edit-user-profile {
    overflow: hidden;
    .part-left {
      width: 120px;
      h3 {
        font-size: 18px;
        color: rgb(102, 102, 102);
        line-height: 0.723;
        margin-bottom: 30px;
      }
      .avatar {
        border-radius: 50%;
        p {
          font-size: 16px;
          color: rgb(102, 102, 102);
        }
      }
    }
    .part-right {
      margin: 65px 0 0 75px;
    }
  }
</style>