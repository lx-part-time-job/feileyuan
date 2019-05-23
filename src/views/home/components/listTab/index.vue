<template>
  <div class="list-tab">
    <ul>
      <li v-for="(item, i) in tabList" class="cursor fl tc" :class="index === i ? 'selected' : ''" @click="changeTab(i, item)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "listTab",
    props: {
      tabList: Array
    },
    data() {
      return {
        index: 0
      }
    },
    methods: {
      changeTab(i, item) {
        this.index = i;
        this.$emit('changeTab', item.index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .list-tab {
    padding: 20px 30px 0;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    margin-bottom: 1px;
    li {
      line-height: 1.5;
      border-bottom: 4px solid transparent;
      width: 60px;
      margin-right: 15px;
      font-size: 20px;
      color: rgb(102, 102, 102);
      font-weight: bold;
    }
    li.selected {
      border-bottom: 4px solid rgb(0, 119, 255);
      color: rgb(0, 119, 255);
    }
  }
</style>