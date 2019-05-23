<template>
	<div class="bg-wrap">
        <div class="con-wrap">
        	<h1>找回密码</h1>
            <ul class='tab'>
                <li class="cursor" @click='tab = 1' :class="tab == 1 ? 'active' : ''">通过短信注册</li>
                <li class="cursor" @click='tab = 2' :class="tab == 2 ? 'active' : ''">通过邮箱注册</li>
            </ul> 
            <div class="tab1" v-if='tab == 1'>
                <p>请输入注册时绑定的手机号码，我们会马上把确认短信发送给您</p>
                <div class="input-wrap">
                    <input type="text" v-model='phone'>
                    <div class="btn cursor">发送</div>
                </div>
            </div> 
            <div class="tab1" v-if='tab == 2'>
                <p>请输入注册时绑定的邮箱，我们会马上把确认短信发送给您</p>
                <div class="input-wrap">
                    <input type="text" v-model='email'>
                    <div class="btn cursor">发送</div>
                </div>
            </div> 
        </div>
	</div>
</template>

<script>
    export default {
    	data(){
    		return {
                tab:1,
                phone:'',
                email:'',
    		}
    	}
  	}
</script>

<style scoped lang="scss">
.bg-wrap{
	background: url(/img/user/footer-bg.png) no-repeat bottom center;
    width: 100%;
    min-height: 415px;
    background-size: 100%;
    padding-bottom: 195px;
    .con-wrap{
        background: url(/img/user/block-bg.png) no-repeat center center;
        width: 1400px;
        height: 690px;
        background-size: 100% 100%;
        margin: 142px auto 0; 
        h1{
            font-size: 24px;
            font-weight: 600px;
            color: #fff;
            text-align: center;
            margin-bottom: 55px;
            padding-top: 142px;
        }
        .tab{
            display: flex;
            justify-content: center;
            text-align: center;
            color: #fff;
            font-size: 16px;
            line-height: 25px;
            >li{
                border-bottom: 1px solid #fff;
                text-align: center;
                width: 230px;
            }
            .active{
                font-weight: 600;
                border-bottom: 2px solid #fff;
            }
        }
        .tab1{
            padding-top: 20px;
            text-align: center;
            width: 460px;
            margin:0 auto;
            p{
                color: #DDDDDD;
                font-size: 14px;
                margin-bottom: 10px;
            }
            .input-wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
                input{
                    width:350px;
                    height:48px;
                    background:rgba(255,255,255,0.1);
                    border:1px solid rgba(255,255,255,1);
                    border-radius:4px;
                    padding-left: 10px;
                    color: #fff;
                    font-size: 16px;
                    box-sizing: border-box;
                }
                .btn{
                    color: #0077FF;
                    width:100px;
                    height:48px;
                    background:rgba(255,255,255,1);
                    border-radius:4px;
                    font-size: 16px;
                    line-height: 48px;
                    margin-left: 10px;
                }
            }
        }
    }
    
}
</style>