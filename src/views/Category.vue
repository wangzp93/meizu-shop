<template>
	<div>
		<h1>分类</h1>
		<nav>
			<router-link to="/phone" tag="div">手机</router-link>
			<router-link to="/category/audio" tag="div">声学</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	
	import Recommend from '../components/category/recommend'
	import Phone from '../components/category/phone'
	import Audio from '../components/category/audio'
	import Section from '../components/category/section'
	import Surround from '../components/category/surround'
	
	import VueRouter from 'vue-router'
	Vue.use(VueRouter);
	
	var router = new VueRouter({
		routers: [
			{path: "/recommend", component: Recommend},
			{path: "/phone", component: Phone},
			{path: "/category/audio", component: Audio},
			{path: "/section", component: Section},
			{path: "/surround", component: Surround}
		]
	});
	export default {
		data() {
			return {
				navList:[],
			};
		},
		components: {
			Phone,
			Audio
		},
		methods: {
			
		},
		router
	}
</script>

<style>
</style>
