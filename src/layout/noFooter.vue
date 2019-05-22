<template>
	<div id="el">
		<Header />
    	<router-view/>
	</div>
</template>

<script>
	import Header from './../components/header';
    export default {
    	data(){
    		return {

    		}
    	},
    	components:{
    		Header
    	}
  	}
</script>

<style scoped>
	#el{
		width:100%;
		margin: 0 auto;
	}
</style>