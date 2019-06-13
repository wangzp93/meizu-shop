<template>
	<div>
		<h1>分类</h1>
		<nav>
			<!-- <router-link v-for="router in routerList"></router-link> -->
		</nav>
		<router-view></router-view>
		<custom-dialog v-if="isDialog"></custom-dialog>
		<button v-on:click="showDialog">弹窗</button>
	</div>
</template>

<script>
	import CustomDialog from '../dialog/custom-dialog'

export default {
	data() {
		return {
			navList:[],
			isDialog: false
		};
	},
	components: {
		CustomDialog
	},
	methods: {
		showDialog() {
			this.isDialog = true;
		},
		hideDialog() {
			this.isDialog = false;
		}
	}
}
</script>

<style>
</style>
