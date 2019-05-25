<template>
  <div class="breadcrumb-components-root">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>兑换比索</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  name: "bbs",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
el-breadcrumb-item {
  color: red;
}
</style>

