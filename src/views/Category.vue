<template>
	<h1>分类</h1>
	<nav>
		<router-link v-for="router in routerList"></router-link>
	</nav>
	<router-view></router-view>
</template>

<script>
import 
export default {
	data() {
		return {
			navList:[]
		};
	}
}
</script>

<style>
</style>
