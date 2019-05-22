
<style scoped>
.header {
	height: 75px;
	border-bottom: 1px solid #eaeaea;
	background-color: #fff;
}
.logo-wrapper{
	margin-right: 20px;
}
.navs{
	padding:25px  0 20px;
}
.navs li {
	float: left;
	margin-right: 10px;
	padding-bottom: 5px;
}
.navs .nav-active{
	border-bottom: 2px solid skyblue;
}
.el-menu.el-menu--horizontal{
	border-bottom: 0;
}
</style>
<template>
	<div class="header">
		<div class="inner ov">
			<router-link class="logo-wrapper fl" to="/" tag="div">
				<img src="../../assets/images/home/nav/logo.png" alt>
			</router-link>
			
			<el-menu :default-active="$route.path" :router=true class="fl" mode="horizontal">
				<el-menu-item index="/">首页</el-menu-item>
				<el-menu-item index="/news">资讯</el-menu-item>
				<el-menu-item index="/bbs">论坛</el-menu-item>
				<el-menu-item index="/topics">专题</el-menu-item>
				<el-menu-item index="/activities">活动</el-menu-item>
			</el-menu>

			<div class="search fl">
				<div class="search-ipt">
					<input type="text">
				</div>
				<i class="icon"></i>
			</div>
			<div class="user fl ov">
				<router-link to="" tag=""></router-link>
				<router-link to=""></router-link>
				<router-link to=""></router-link>
				<router-link to=""></router-link>
				<span class=""></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "headerWrapper"
	}
</script>
