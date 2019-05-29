<!-- 弹窗组件 -->
<template>
	<div>
		
		<div class="dialog-mask">
		</div>
		<div class="dialog-panel">
			<h2 class="dialog-header">{{ title }}</h2>
			
			<footer class="dialog-footer">
				<button class="dialog-btn-yes">确定</button>
				<button class="dialog-btn-no">取消</button>
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
			z-index: 1000;
			border: 1px solid #000;
			background: #FFF;
			width: 75vw;
			margin: 5vw auto;
			.dialog-header {
				padding: 10px;
				background: #007aff;
				color: #FFF;
			}
			.dialog-footer {
				button {
					width: 15vw;
					height: 3vw;
					border-radius: 5vw;
					border: none;
				}
				.dialog-btn-yes {
					background: blue
				}
			}
		}
</style>
