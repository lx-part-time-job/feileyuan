<template>
  <div id="el">
    <Header />
    <router-view class="inner"/>
    <Footer />
  </div>
</template>

<script>
  import Header from './../components/header';
  import Footer from './../components/footer';
  export default {
    components: {
      Header, Footer
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  #el {
    width: 100%;
    margin: 0 auto;
  }
</style>
