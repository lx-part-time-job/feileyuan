<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/header';
  import Footer from './components/footer';
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
  #app {
    width: 1200px;
    margin: 0 auto;
  }
</style>
