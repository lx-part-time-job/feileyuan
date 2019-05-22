<template>
  <div class="edit-profile">
    <nav-wrapper :navList="navList" @changeNavSelect="changeNavSelect">
      <div class="content" slot="content">
        <component :is="currentComponent"></component>
      </div>
    </nav-wrapper>
  </div>
</template>

<script>
  import navWrapper from '../../components/navWrapper/index';
  import editUserProfile from './components/editProfile/index';
  import safeSetting from './components/editProfile/safeSetting';
  import Notify from './components/editProfile/notify';
  export default {
    name: "editProfile",
    components: {navWrapper, editUserProfile, safeSetting, Notify},
    data() {
      return {
        navList: [{
          title: '修改资料',
          name: 'editUserProfile'
        }, {
          title: '安全设置',
          name: 'safeSetting'
        }, {
          title: '消息通知',
          name: 'notify'
        }],
        currentComponent: "editUserProfile"
      }
    },
    methods: {
      changeNavSelect(name) {
        this.currentComponent = name
      }
    }
  }
</script>

<style scoped lang="scss">
  .edit-profile {
    background: #fff;
    margin-top: 20px;
    .content {
      padding: 25px 120px 40px;
    }
  }
</style>