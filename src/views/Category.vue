<template>
	<div>
		<h1>分类</h1>
		<nav>
			<!-- <router-link v-for="router in routerList"></router-link> -->
		</nav>
		<router-view></router-view>
		<custom-dialog :options="dialogOption" @yesFun="success" @noFun="hideDialog">
			<p slot="dialog-content">法拉涉及到法律就撒地方事件砥砺奋进士大夫吉林省的两室就得傅雷家书多了几分两室就得了圣诞节福利熟练度 塑料袋积分</p>
		</custom-dialog>
		<button @click="showDialog">弹窗</button>
	</div>
</template>

<script>
	import CustomDialog from '../dialog/custom-dialog'

export default {
	data() {
		return {
			navList:[],
			dialogOption: {
				title: "I'm title",
				yesText: "yes",
				noText: "no",
				isShow: false
			}
		};
	},
	components: {
		CustomDialog
	},
	methods: {
		showDialog() {
			this.dialogOption.isShow = true;
		},
		hideDialog() {
			this.dialogOption.isShow = false;
		},
		success() {
			alert("success");
		}
	}
}
</script>

<style>
</style>
