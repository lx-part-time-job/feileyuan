<template>
  <div class="subject-container">
    <div class="cb">
      <div v-for="(item, i) in classifyItem" :key="i" class="fl classify-item" :class="i==index?'active':''" v-text="item.title" @click="classifyToggle(i)"></div>
    </div>
    <ul v-show="index==0">
      <li class="cb" v-for="(item, index) in 10" :key="index">
        <i v-text="index+1"></i>
        <span>[综合讨论]</span>
        <h4>这里是一个标题。超过15个字显示 .....</h4><em>天龙吟</em>
      </li>
    </ul>
    <ul v-show="index==1">
      <li class="cb" v-for="(item, index) in 10" :key="index">
        <i v-text="index">{{index}}</i>
        <span>[综合讨论综合讨论]</span>
        <h4>不是一个标题。超过15个字显示过15个字显示过15个字显示 .....</h4><em>天龙吟天龙吟</em>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "subject",
  data() {
    return {
      classifyItem: [{ title: "热门主题" }, { title: "最新主题" }],
      index: 0
    };
  },
  methods: {
    classifyToggle(e) {
      this.index = e;
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin text_no_wrap {
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.subject-container {
  margin-left: 33px;
  width: 420px;
  .classify-item {
    width: 50%;
    text-align: center;
    position: relative;
    padding-top: 7px;
    line-height: 42px;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    color: rgba(33, 33, 33, 1);
    &::after {
      width: 0%;
      height: 4px;
      background: rgba(0, 105, 224, 1);
      position: absolute;
      left: 0;
      right: 0;
      content: "";
      display: block;
      bottom: 0;
    }
    &.active {
      &::after {
        width: 100%;
      }
    }
  }
  ul {
    padding-top: 13px;
    li {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      line-height: 34px;
      padding-left: 63px;
      background-repeat: no-repeat;
      color: #212121;
      position: relative;
      background-position: 24px center;
      background-image: url("../../../../assets/images/common/rect_triangle_gray.png");
      @for $var from 0 to 4 {
        &:nth-of-type(#{$var}) {
          background-image: url("../../../../assets/images/common/rect_triangle.png");
        }
      }
      i {
        position: absolute;
        left: 24px;
        width: 24px;
        color: #fff;
        top: 0;
        text-align: center;
        z-index: 2;
        font-size: 12px;
      }
      span {
        color: #0077ff;
        float: left;
        width: 68px;
        @include text_no_wrap;
      }
      h4 {
        width: 17em;
        overflow: hidden;
        float: left;
        @include text_no_wrap;
      }
      em {
        color: #999;
        float: right;
        width: 45px;
        @include text_no_wrap;
      }
    }
  }
}
</style>
