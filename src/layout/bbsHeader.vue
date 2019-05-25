<template>
    <div id="el">
        <bbsHeader/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import bbsHeader from './../components/bbsHeader';
    import Footer from './../components/footer';

    export default {
        components: {
            bbsHeader, Footer
        },
        data() {
            return {}
        }
    }
</script>

<style>
    #el {
        width: 100%;
        margin: 0 auto;
    }
</style>
