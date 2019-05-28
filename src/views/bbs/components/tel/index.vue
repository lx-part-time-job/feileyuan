<template>
  <div class="tel-container">
    <div class="tel-top-container">
      <div>
        匪警:
        <span>117</span>或
        <span>168</span>
      </div>
      <div>
        火警:
        <span>757</span>或
        <span>116</span>
      </div>
      <div>
        救护车:
        <span>10000</span>
      </div>
      <div>
        移民局:
        <span>02-527-3248</span>
      </div>
      <div>
        大使馆:
        <span>02-844-3148</span>
      </div>
    </div>
    <div class="tel-bottom-container cb">
      <div class="tel-btn-item" v-for="(item,index) in 8" :key="index">币种兑换</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "tel",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.tel-container {
  width: 220px;
  height: 415px;
  background: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding-left: 19px;
  box-sizing: border-box;
  box-shadow: 0 0 10px 1px rgba($color: #000000, $alpha: 0.1);
  .tel-top-container {
    font-size: 16px;
    color: #888;
    line-height: 40px;
    padding: 20px 0 20px 0;
    span {
      color: #0077ff;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .tel-bottom-container {
    .tel-btn-item {
      float: left;
      width: 80px;
      height: 30px;
      background: rgba(0, 119, 255, 1);
      border-radius: 14px;
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      text-align: center;
      line-height: 30px;
      margin-right: 20px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(8) {
        background: rgba(94, 181, 74, 1);
      }
    }
  }
}
</style>
