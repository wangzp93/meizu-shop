<!-- 产品列表 -->
<template>
	<div class="product-list">
		<div v-for="product in productList" class="product-content">
			<a :href="product.a_href">
				<img :src="product.img_src" :lazy-src="product.img_src" :alt="product.name">
				<div class="info">
					<p class="products-name">{{ product.name }}</p>
					<p class="slogan"><span class="slogan-feature"><span class="slogan-special">{{ product.slogan }}</span>{{ product.feature }}</span></p>
					<p class="price"><i>{{ product.unit }}</i>{{ product.price }}</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			productList: {
				type: [Array],
				default: []
			}
		}
	}
</script>

<style lang="less" scoped>
	/* 产品列表 */
	.product-list {
		display: flex;
		flex-wrap: wrap;
		background: #f4f4f4;
		padding-top: 1.5vw;
		align-items: center;
		justify-content: space-between;
		/* 产品内容 */
		.product-content {
			position: relative;
			width: 49.2%;
			text-align: center;
			background: #fff;
			padding-top: 6.2963vw;
			padding-bottom: 4.90741vw;
			margin-bottom: 1.11111vw;
			box-sizing: border-box;
			/* 产品图片 */
			img {
				display: inline-block;
				width: 85%;
				min-height: 100px;
				will-change: height;
			}
			/* 产品名称 */
			.products-name {
				font-size: 3.88889vw;
				color: #333;
				font-weight: 700;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			/* 产品特点 外框 */
			.slogan {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 3.33333vw;
				margin: 0 1.5vw;
				margin-top: 1.75926vw;
				margin-bottom: 2.5vw;
				/* 产品特点 内容 */
				.slogan-feature {
					padding: 0 1.25vw;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #c00;
					border: 1px solid #c00;
					line-height: 4.62963vw;
					/* 产品特点 着重显示 */
					.slogan-special {
						float: left;
						padding: 0 1.25vw;
						margin-left: -1.25vw;
						margin-right: 1.25vw;
						color: #fff;
						background-color: #c00;
					}
				}
			}
			/* 价格 */
			.price {
				font-size: 3.88889vw;
				color: #c00;
				i {
					font-style: normal;
					font-size: 2.8vw;
				}
				.history-price {
					color: #999;
					font-size: 3vw;
					padding-left: 1vw;
					text-decoration: line-through;
				}
			}
		}
	}
</style>
