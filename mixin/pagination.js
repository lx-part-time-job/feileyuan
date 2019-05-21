export default {
    methods: {
        changePage(pageNum) {
            let query = JSON.parse(JSON.stringify(this.$route.query));
            query["pageNum"] = pageNum;
            let url = this.$route.path + '?' + this.$utils.urlEncode(query).substr(1);
            this.$router.push(url);
        },

    }
}
