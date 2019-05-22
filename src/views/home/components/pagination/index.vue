<template>
  <div class="pagination-wrapper tc">
    <el-pagination
      background
      @current-change="changePage"
      layout="prev, pager, next, jumper"
      :current-page="1"
      :page-size="1"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import pagination from '../../../../../mixin/pagination';
  export default {
    name: "pagination",
    mixins: [pagination],
    props: ["total"]
  }
</script>

<style scoped>
  .pagination-wrapper {
    width: 100%;
    padding: 20px 0;
  }
</style>