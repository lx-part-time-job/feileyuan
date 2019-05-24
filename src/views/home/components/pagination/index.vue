<template>
  <div class="pagination-wrapper tc">
    <el-pagination
      background
      @current-change="changePage"
      layout="prev, pager, next, jumper"
      :current-page="parseInt($route.query.page) || 1"
      :page-size="10"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import changeQuery from '../../../../../mixin/change_query';
  export default {
    name: "pagination",
    mixins: [changeQuery],
    props: ["total"],
    methods: {
      changePage(page) {
        this.$route.query.index ? this.changeQuery({index: this.$route.query.index, page}) : this.changeQuery({page})

      }
    }
  }
</script>

<style scoped>
  .pagination-wrapper {
    width: 100%;
    padding: 20px 0;
  }
</style>