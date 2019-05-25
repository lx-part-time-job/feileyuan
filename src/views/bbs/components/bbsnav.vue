<template>
  <div class="nav">
    <el-menu
      :default-active="$route.path"
      :router=true
      class="bbs-nav-container inner"
      mode="horizontal"
    >
      <el-menu-item class="bbs-nav-slide" index="/bbs" >首 页</el-menu-item>
      <el-menu-item class="bbs-nav-slide" index="">成就中心</el-menu-item>
      <el-menu-item class="bbs-nav-slide" index="">商城</el-menu-item>
      <el-menu-item class="bbs-nav-slide" index="">乐豆提现</el-menu-item>
      <el-menu-item class="bbs-nav-slide" index="">收藏本站</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$transition: all 0.3s linear;
.nav {
  background: #fff;
  text-align: center;
  box-shadow: 0 0 3px 1px rgba($color: #000000, $alpha: 0.05);
  position: relative;
  .bbs-nav-container {
    .bbs-nav-slide {
      display: inline-block;
      float: none;
      margin: 0 45px;
      padding: 0 4px;
      font-size: 16px;
      color: #212121;
      position: relative;
      border-bottom: none;
      &::after {
        display: block;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        // transition: $transition;
        width: 0;
        height: 4px;
        margin: 0 auto;
        bottom: -2px;
        background: transparent;
      }
      &.is-active {
        border-bottom: none;
        &::after {
          width: 100%;
          background: #409eff;
        }
      }
    }
  }
}
</style>

