<template>
	<div id="info-box">
		<div class="bg">
			<img class="logo" src="../../assets/flame.jpg" />
			<div class="title">用户登录</div>
		</div>
		<div>
			<van-cell-group>
				<van-field v-model="formItem.userName" label="账号" placeholder="请输入手机号" clearable />
				<van-field v-model="formItem.passwd" label="密码" type="password" placeholder="请输入密码" />
			</van-cell-group>
			<p class="red">{{errorMsg}}</p>
			<van-button round type="primary" size="normal" @click="login">
				<van-loading v-show="loadingShow" /> 登录
			</van-button>
		</div>
		<div id="copyright">© 2019 巨石网络 中国·长沙</div>
	</div>
</template>
<script>
	//import { loginService } from '@/api/service';
	import {
		Field,
		Cell,
		Button,
		CellGroup,
		Loading
	} from 'vant';
	
	export default {
		components: {
			[Field.name]: Field,
			[Cell.name]: Cell,
			[Button.name]: Button,
			[CellGroup.name]: CellGroup,
			[Loading.name]: Loading
		},
		data() {
			return {
				errorMsg: "",
				loadingShow: false,
				formItem: {
					userName: "",
					passwd: ""
				}
			}
		},
		methods: {
			onClickLeft() {
				this.$router.push({
					name: 'Goods'
				});
				
			},
			async login() {
				// Toast("查询");
				//console.log(this.formItem.passwd);
				this.loadingShow = true;
				try {
					let data = "userName=" + this.formItem.userName + "&passwd=" + this.formItem.passwd;
					let res = await loginService(data);
					if(res.returnCode === "SUCCESS" && res.resultCode === "SUCCESS") {
						//登录成功
						this.errorMsg = res.errCodeDes;
						this.loadingShow = false;
						let coachData = JSON.stringify(res.data);
						sessionStorage.setItem('coachData',coachData);
						this.$router.push({
							name: 'class_list' //跳转减肥班列表
						});
					} else {
						console.log("登录失败:" + res);
						this.errorMsg = res.errCodeDes;
						this.loadingShow = false;
					}
				} catch(e) {
					alert(e);
				}
			}
		}
	}
</script>

<style scoped>
	.bg {
		margin: 0 auto;
		margin-top: 6rem;
	}
	
	.logo {
		width: 300px;
		height: 120px;
	}
	
	.title {
		font-size: 18px;
		font-weight: 900;
		color: #F99A06;
	}
	
	.van-cell-group {
		width: 90%;
		margin: 2rem auto 2rem;
	}
	
	.van-button {
		width: 200px;
	}
	
	.van-button--primary {
		background-color: #F99A06;
		border: 1px solid #F99A06;
	}
	
	#copyright {
		width: 100%;
		font-size: 12px;
		color: #999;
		position: fixed;
		bottom: 30px;
	}
	
	.red {
		color: red;
	}
	
	.van-loading {
		margin-left: 70px;
		margin-top: 5px;
	}
</style>