<template>
  <div class="nav-wrapper">
    <ul class="tc">
      <li v-for="(item, i) in navList" :class="index === i ? 'selected cursor' : 'cursor'" @click="changeNavSelect(i, item.name)" >
        <span>{{item.title}}</span>
      </li>
    </ul>
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name: "navWrapper",
    props: {
      navList: Array
    },
    data() {
      return {
        index: 0
      }
    },
    methods: {
      changeNavSelect(i, name) {
        this.index = i;
        this.$emit('changeNavSelect', name)
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-wrapper {
    ul {
      overflow: hidden;
      border-bottom: 1px solid rgb(221, 221, 221);
      padding-top: 30px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      li {
        margin-right: 72px;
        font-size: 24px;
        color: rgb(102, 102, 102);
        padding-bottom: 8px;
        border-bottom: 2px solid transparent;
      }
      li.selected {
        color: rgb(51, 51, 51);
        border-bottom: 2px solid rgb(0, 119, 255);
      }
    }
  }
</style>