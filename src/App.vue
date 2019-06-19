<template>
	<div id="app">
		<div class="main-router-view">
			<router-view></router-view>
		</div>
		<nav class="main-router">
			<!-- <router-link :to="{name: 'homeLink'}" tag="a">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-home"></use>
				</svg><br>首页
			</router-link> -->
			<router-link v-for="(router, index) in routerList" :key="index" :to="formatRouterLink(router.eng_name)" tag="a">
				<svg-icon :iconName="router.eng_name"></svg-icon><br>
				<span>{{ router.text }}</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			/**
			 * 为使开发简便，路由地址与svg图标地址均与英文名字相关，
			 * 所以添加新路由时要注意一下，避免出现英文名不同的情况
			 */
			routerList: [{
				eng_name: "home",
				text: "首页"
			}, {
				eng_name: "category",
				text: "分类"
			},/* {
				eng_name: "find",
				text: "发现"
			}, */ {
				eng_name: "cart",
				text: "购物车"
			}, {
				eng_name: "me",
				text: "我的"
			}]
		};
	},
	methods: {
		//格式化路由地址
		formatRouterLink (eng_name) {
			return {
				name: eng_name + "Link"
			};
		},
		//格式化svg图标地址
		formatSvgHref (eng_name) {
			return "#icon-" + eng_name;
		}
	}
}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	#app {
		.main-router-view {
			max-height: 88.5vh;
			overflow: auto;
		}
	}
	/* 导航栏 */
	nav.main-router {
		position: fixed;
		bottom: 0;
		width: 100%;
		font-size: 2.5vh;
		background-color: #fff;
		z-index: 1000;
		padding: 1vh 0;
		display: flex;
		justify-content: space-around;
		a {
			color: #999;
			text-align: center;
			&.router-link-active {
			// &.u-link--Active {
				color: #007aff;
			}
			.icon {
				font-size: 6vh;
			}
		}
	}
</style>
