<!-- 热点 -->
<template>
	<div class="index-hot-site">
		<!-- 上半部 -->
		<div class="hot-tip-bar">
			<span v-for="tipBar in tipBarList">
				<img :src="tipBar.img_src">{{ tipBar.text }}
			</span>
		</div>
		<!-- 下半部 -->
		<div class="hot-site">
			<ul>
				<li v-for="hotSide in hotSideList">
					<a :href="hotSide.a_href">
						<img :src="hotSide.img_src" alt="">
						<span>{{ hotSide.text }}</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tipBarList: [{
					img_src: "https://fms.res.meizu.com/dms/2018/03/30/99f49dfe-25c2-485a-b7b3-8b63d6487b46.png",
					text: "魅族官方直供"
				}, {
					img_src: "https://fms.res.meizu.com/dms/2018/03/30/8f1252b1-3fb2-48e2-b992-1f38a9745314.png",
					text: "满80免运费"
				}, {
					img_src: "https://fms.res.meizu.com/dms/2018/03/30/3924a1e1-5b4a-41de-9e79-ee904ec69d90.png",
					text: "7 天无理由退货"
				}],
				
				hotSideList: [{
					a_href: "https://detail.meizu.com/item/meizu16th.html?click=mall_index_menu_1",
					img_src: "https://fms.res.meizu.com/dms/2019/04/02/a41abe89-0504-41cc-a779-0834301cc43c.png",
					text: "16th系列"
				}, {
					a_href: "https://detail.mall.meizu.com/item/meizunote9.html?click=mall_index_menu_2",
					img_src: "https://fms.res.meizu.com/dms/2019/04/12/6071ab57-361d-4a27-94a7-c8c1eaaa6776.jpg",
					text: "限时3期免息"
				}, {
					a_href: "http://mcycle.mall.meizu.com/?click=mall_index_menu_3",
					img_src: "https://fms.res.meizu.com/dms/2019/03/07/5fe50002-796a-45b7-9099-4f6286dedb8e.png",
					text: "以旧换新"
				}, {
					a_href: "http://mformy.meizu.com/?click=mall_index_menu_4",
					img_src: "https://fms.res.meizu.com/dms/2019/03/25/cd5abc64-149e-4e46-875b-4a2358736e9f.png",
					text: "M码通道"
				}]
			};
		}
	}
</script>

<style lang="less" scoped>
	/* 外部框 */
	.index-hot-site {
		background: #fff;
		margin-bottom: 2.77778vw;
		text-align: center;
		/* 上半部 */
		.hot-tip-bar {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 2.4vw 7.40741vw;
			background-color: #f7f7f7;
			span {
				display: inline-block;
				padding-left: 5vw;
				font-size: 2.6vw;
				color: #999;
				position: relative;
				img {
					position: absolute;
					width: 3.51852vw;
					height: 3.51852vw;
					background: #999;
					left: 0;
					border-radius: 50%;
					top: 50%;
					-webkit-transform: translateY(-50%);
					transform: translateY(-50%);
				}
			}
		}
		/* 下半部 */
		.hot-site {
			ul {
				padding-top: 4vw;
				padding-bottom: 1vw;
				li {
					display: inline-block;
					width: 20vw;
					height: 17vw;
					margin: 0 1vw;
					a {
						display: block;
						img {
							display: block;
							width: 8.33333vw;
							margin: 0 auto;
						}
						span {
							color: #000;
							line-height: 2.6;
							font-size: 3.33333vw;
						}
					}
				}
			}
		}
	}
</style>
