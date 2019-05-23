export default {
  methods: {
    resetQuery() {
      let query = this.$router.history.current.query;
      let path = this.$router.history.current.path;
//对象的拷贝
      let newQuery = JSON.parse(JSON.stringify(query));
      newQuery = {};
      this.$router.push({ path, query: newQuery });
    }
  }
}
