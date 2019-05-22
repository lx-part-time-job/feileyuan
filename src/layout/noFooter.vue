<template>
	<div>
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

<style scoped lang="scss">

</style>