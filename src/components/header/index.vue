
<style scoped>
.header {
	height: 75px;
	border-bottom: 1px solid #eaeaea;
	background-color: #fff;
}
.logo-wrapper{
	margin-right: 20px;
}
.el-menu,.search,.user{
	padding:20px  0 20px;
}
.search{
	background-image: url(../../assets/images/home/nav/menu.png);
	background-repeat: no-repeat;
	background-position: right center;
	padding-right: 30px;
	margin-right: 30px;
}

.el-menu.el-menu--horizontal{
	border-bottom: 0;
}
.el-menu--horizontal>.el-menu-item{
	height: 35px;
    line-height: 35px;
}
.el-menu--horizontal>.el-menu-item.is-active{
	color:#409EFF;
}

.icon{
	display: inline-block;
	margin-left:20px;
}
.username{
	color:#409EFF;
	margin-bottom: 5px;
}
.userlevel>*{
	vertical-align: top;
	display:inline-block;
	font-size: 12px;
	line-height: 15px;
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

			<div class="search fl ov">
				<el-input class="fl" prefix-icon="el-icon-search" size="small" placeholder="请输入您要搜索的关键字" v-model="keywords"></el-input>
				
			</div>
			<div class="user fr ov">
				<router-link to="" class="ov">
					<img src="../../assets/images/home/nav/head_img.png" class="fl" alt="">
					<div class="fl">
						<h4 class="username">这是用户名</h4>
						<div class="userlevel">
							<img src="../../assets/images/home/nav/level_8.png" alt="" class="inline">
							<span class="inline">经验：2328</span>
						</div>
					</div>
				</router-link>
				<router-link to=""><img src="../../assets/images/home/nav/chat.png" alt="" class="icon"></router-link>
				<router-link to=""><img src="../../assets/images/home/nav/friend.png" alt="" class="icon"></router-link>
				<router-link to=""><img src="../../assets/images/home/nav/setting.png" alt="" class="icon"></router-link>
				<img src="../../assets/images/home/nav/quit.png" alt="" class="icon">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "headerWrapper",
		data(){
			return{
				keywords:''
			}
		}
	}
</script>
