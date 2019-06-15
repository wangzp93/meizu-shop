<template>
	<div class="me-info">
		<div class="me-icon">
			<img :src="img_src">
		</div>
		<p class="me-name">{{ meName }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				img_src: "//image-res.mzres.com/img/download/uc/17/47/28/26/00/17472826/w200h200?t=1533114361000",
				meName: "用户69891304"
			}
		}
	}
</script>

<style lang="less">
	.me-info {
		background: linear-gradient(rgb(0, 187, 232), rgb(0, 146, 221));
		padding: 5vw;
		.me-icon {
			width: 23vw;
			height: 23vw;
			margin: 0 auto;
			background: #FFF;
			border-radius: 50%;
			padding: 1vw;
			img {
				width: 100%;
				border-radius: 50%;
			}
		}
		.me-name {
			text-align: center;
			color: #FFF;
			font-weight: 500;
			font-size: 5vw;
			margin-top: 2vw;
		}
	}
</style>
