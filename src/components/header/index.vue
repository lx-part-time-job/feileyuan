
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
	margin-left: 10px;
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
.el-button{
	padding:8px 18px;
}
</style>
<style lang="scss" >
.header {
	.default-nav{
		.el-menu-item {
			padding: 0;
			margin: 0 23px;
			position: relative;
			font-size: 18px;
			color:rgba(51,51,51,1);
			&.is-active{
				border-bottom: 0;
				// font-weight: bold;
				&::after{
					display: block;
					content: "";
					position: absolute;
					width: 100%;
					height:4px;
					background:rgba(0,119,255,1);
					bottom: -20px;
				}
			}
		}
	}

}
</style>
<template>
	<div class="header">
		<div class="inner ov">
			<router-link class="logo-wrapper fl cursor" to="/" tag="div">
				<img src="../../assets/images/home/nav/logo.png" alt>
			</router-link>
			<div class="default-nav fl cb">
				<el-menu :default-active="$route.path" :router=true class="fl" mode="horizontal">
					<el-menu-item index="/">首页</el-menu-item>
					<el-menu-item index="/news">资讯</el-menu-item>
					<el-menu-item index="/bbs">论坛</el-menu-item>
					<el-menu-item index="/topic">专题</el-menu-item>
					<el-menu-item index="/activity">活动</el-menu-item>
				</el-menu>
			</div>
			<div class="search fl ov">
				<el-input class="fl" prefix-icon="el-icon-search" size="small" placeholder="请输入您要搜索的关键字" v-model="keywords"></el-input>
				
			</div>
			<div class="user fr ov" v-if="islogin">
				<router-link to="" class="ov">
					<img src="../../assets/images/home/nav/head_img.png" class="fl" alt="">
					<div class="fl">
						<h4 class="username">{{username}}</h4>
						<div class="userlevel">
							<img src="../../assets/images/home/nav/level_8.png" alt="" class="inline">
							<span class="inline">经验：2328</span>
						</div>
					</div>
				</router-link>
				<router-link to=""><img src="../../assets/images/home/nav/chat.png" alt="" class="icon"></router-link>
				<router-link to=""><img src="../../assets/images/home/nav/friend.png" alt="" class="icon"></router-link>
				<router-link to=""><img src="../../assets/images/home/nav/setting.png" alt="" class="icon"></router-link>
				<img @click='logout' src="../../assets/images/home/nav/quit.png" alt="" class="icon cursor">
			</div>
			<div class="user fr ov" v-else>
				<router-link to='/login' tag="el-button">登录</router-link>
				<router-link to="/register" tag="el-button">注册</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import localStore from '../../assets/js/cookies'
	
	export default {
		name: "headerWrapper",
		data(){
			return{
				keywords:'',
				islogin:false,
				username:''
			}
		},
		methods:{
			logout(){
				try {
					let uInfo = JSON.parse(this.$getCookie('uInfo'));
					let that = this;
					if(uInfo && uInfo.loginName){
						this.$axios.post('/users/logout',{},{
							headers: {
		                        "loginName": uInfo.loginName,
		                    }
						}).then(res =>{
							if(res.data.code == 0){
								that.$delCookie("uInfo");
								that.$message({
				                    message: '退出成功',
				                    type: "success",
				                    duration: 2000,
				                    onClose() {
				                        that.$router.go(0);
				                    }
				                });
							}
						})
					}
				} catch(e) {
					// statements
					console.log(e);
				}
			}
		},
		mounted(){
			let userInfo = this.$getCookie('uInfo')
			userInfo? this.islogin =true:this.islogin=false;
			if(userInfo){
				this.username = JSON.parse(userInfo).loginName
				console.log(typeof (userInfo),userInfo.loginName)
			}
		}
	}
</script>
