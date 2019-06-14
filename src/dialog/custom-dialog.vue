<!-- 弹窗组件 -->
<template>
	<div v-if="options.isShow">
		<div class="dialog-mask"></div>
		<div class="dialog-panel">
			<h2 class="dialog-header">
				<span>{{ options.title }}</span>
				<span @click="noFun" class="dialog-close">×</span>
			</h2>
			<div class="dialog-body">
				<slot name="dialog-content"></slot>
			</div>
			<footer class="dialog-footer">
				<button @click="yesFun" class="dialog-btn-yes">{{ options.yesText }}</button>
				<button @click="noFun" class="dialog-btn-no">{{ options.noText }}</button>
			</footer>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: "标题"
			}
		},
		props: {
			options: {
				
			}
		},
		methods: {
			yesFun() {
				this.$emit("yesFun");
			},
			noFun() {
				// this.options.isShow = false;
				this.$emit("noFun");
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.dialog-mask {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 100;
		background: #000;
		opacity: 0.4;
		width: 100%;
		height: 100%;
	}
	.dialog-panel {
		position: absolute;
		left: 0;
		right: 0;
		z-index: 101;
		border: 1px solid #000;
		border-radius: 1vw;
		background: #FFF;
		width: 75vw;
		margin: 0 auto;
		.dialog-header {
			padding: 1.5vw;
			background: #007aff;
			color: #FFF;
			border-radius: 1vw 1vw 0 0;
			font-size: 3vw;
			.dialog-close {
				float: right;
				cursor: pointer;
			}
		}
		.dialog-body {
			padding: 1.5vw;
			overflow-y: auto;
			font-size: 2vw;
		}
		.dialog-footer {
			border-radius: 0 0 1vw 1vw;
			display: flex;
			justify-content: center;
			border-top: 1px solid #eee;
			button {
				width: 20vw;
				height: 5vw;
				border-radius: 5vw;
				margin: 1vw 0;
				font-size: 2vw;
				border: none;
				outline: none;
				cursor: pointer;
			}
			.dialog-btn-yes {
				background: #007aff;
				margin-right: 2vw;
				color: #FFF;
			}
			.dialog-btn-no {
				margin-left: 2vw;
				color: #666;
			}
		}
	}
</style>
