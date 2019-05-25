export default {
    methods: {
        changeQuery(queryObj) {
            let query = this.$router.history.current.query,
              path = this.$router.history.current.path,
              newQuery = JSON.parse(JSON.stringify(query));
            newQuery = {...queryObj};
            this.$router.push({ path, query: newQuery });
        }
    }
}
