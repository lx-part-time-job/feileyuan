<template>
  <div>
    <div class="section-item">
      <!--  -->
      <div class="section-title-container cb">
        <div class="fl section-title">综合版块</div>
        <div class="fr cb section-slide-btn" @click="showFun">
          <div class="fl iconfont icon-shangjiantou"></div>
          <div class="fl" v-text="'收缩'"></div>
        </div>
      </div>
      <!--  -->
      <el-collapse-transition>
        <div v-show="show3">
          <div class="section-bottom-container cb">
            <div class="section-bottom-item cb">
              <div class="img_wrap">
                  <img src="../../../../assets/images/bbs/bbs_section1.png" alt="">
              </div>
              <div class="text-container">
                <div class="title">
                  综合讨论
                  <span>(1212124)</span>
                </div>
                <div class="description">记录你在菲国的点点滴滴</div>
                <div class="cb text">
                  <div class="fl">
                    主题：
                    <span>231312</span>
                  </div>
                  <div class="fl">
                    贴数：
                    <span>2323232</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-collapse-transition>
      <!--  -->
    </div>
  </div>
</template>
<script>
export default {
  name: "bbsSection",
  data() {
    return {
      show3: false
    };
  },
  methods: {
    showFun() {
      this.show3 = !this.show3;
    }
  }
};
</script>
<style lang="scss" scoped>
.section-title-container {
  line-height: 40px;
  margin-bottom: 15px;
  .section-title {
    color: #333333;
    font-size: 20px;
    padding-left: 42px;
  }
}
.section-slide-btn {
  font-size: 14px;
  color: #555;
  margin-right: 41px;
  cursor: pointer;
  .iconfont {
    font-size: 26px;
    color: inherit;
    margin-right: 11px;
  }
}
.section-bottom-container {
  background: #fff;
  box-shadow: 0 0 10px 1px rgba($color: #000000, $alpha: 0.18);
  padding: 48px 0 0 22px;
}
.section-bottom-item {
  width: 380px;
  float: left;

  .img_wrap {
    width: 123px;
    height: 123px;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.text-container {
  width: calc(100% - 123px);
  padding-left: 3px;
  box-sizing: border-box;
  padding-top: 5px;
  float: left;
  .title {
    color: #333333;
    font-size: 18px;
    line-height: 28px;
    height: 28px;
    span {
      color: #999999;
      font-size: 14px;
    }
  }
  .description {
    margin-top: 8px;
    color: #555555;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .text {
    line-height: 24px;
    color: #85c6f3;
    font-size: 14px;
    span {
      color: #555555;
    }
    .fl{
        &:nth-child(2){
            margin-left: 27px;
        }
    }
  }
}
</style>

