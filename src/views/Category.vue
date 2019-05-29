<template>
	<div>
		<h1>分类</h1>
		<nav>
			<!-- <router-link v-for="router in routerList"></router-link> -->
		</nav>
		<router-view></router-view>
		<custom-dialog></custom-dialog>
	</div>
</template>

<script>
	import CustomDialog from '../dialog/custom-dialog'

export default {
	data() {
		return {
			navList:[]
		};
	},
	components: {
		CustomDialog
	},
	methods: {
		
	}
}
</script>

<style>
</style>
