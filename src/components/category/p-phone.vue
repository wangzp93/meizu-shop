<!-- 手机 -->
<template>
	<div class="index-phone">
		<!-- 标题 -->
		<h3 class="list-title">{{ title }}</h3>
		<!-- 广告 -->
		<div class="list-ad">
			<a :href="ad.a_href">
				<img :src="ad.img_src" :lazy-src="ad.img_src" alt="">
			</a>
		</div>
		<product-list :productList="list"></product-list>
	</div>
</template>

<script>
	import ProductList from '../home/product/product-list.vue'
	export default {
		data() {
			return {
				title: "智能手机",
				ad: {
					a_href: "https://detail.meizu.com/item/meizu16x.html",
					img_src: "https://openfile.meizu.com/group1/M00/07/08/Cgbj0VxmbimAFFM6AAJBovov-HM067.jpg"
				},
				list: [{
					a_href: "https://detail.meizu.com/item/meizu16th.html",
					img_src: "https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png",
					name: "魅族 16th",
					slogan: "直降",
					feature: "骁龙845 屏幕下指纹",
					unit: "￥",
					price: 2298
				}, {
					a_href: "https://detail.meizu.com/item/meizu16thplus.html",
					img_src: "https://openfile.meizu.com/group1/M00/05/F0/Cgbj0VtqgjeAV_ChAAfVjwwpNdw016.png",
					name: "魅族 16th Plus",
					slogan: "直降",
					feature: "骁龙845 屏幕下指纹",
					unit: "￥",
					price: 2698
				}, {
					a_href: "https://detail.meizu.com/item/meizunote9.html",
					img_src: "https://openfile.meizu.com/group1/M00/07/12/Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png",
					name: "魅族 Note9",
					slogan: "新品",
					feature: "骁龙675 后置4800万",
					unit: "￥",
					price: 1398
				}, {
					a_href: "https://detail.meizu.com/item/meizu16x.html",
					img_src: "https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png",
					name: "魅族 16 X",
					slogan: "领券",
					feature: "骁龙710 轻奢旗舰",
					unit: "￥",
					price: 1798
				}, {
					a_href: "https://detail.meizu.com/item/meizux8.html",
					img_src: "https://openfile.meizu.com/group1/M00/06/A9/Cgbj0FusSK2AQZgiAAlFKHoO-co889.png",
					name: "魅族 X8",
					slogan: "领券",
					feature: "双摄全面屏 游戏长续航",
					unit: "￥",
					price: 1298
				}, {
					a_href: "https://detail.meizu.com/item/meizuv8.html",
					img_src: "https://openfile.meizu.com/group1/M00/06/AC/Cgbj0VujaMOAFzUFAARRWnHvM84529.png",
					name: "魅族 V8 高配版",
					slogan: "领券",
					feature: "双摄全面屏 游戏长续航",
					unit: "￥",
					price: 898
				}, {
					a_href: "https://detail.meizu.com/item/meizunote8.html",
					img_src: "https://openfile.meizu.com/group1/M00/06/D4/Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png",
					name: "魅族 Note8",
					slogan: "领券",
					feature: "骁龙632 疾速双摄",
					unit: "￥",
					price: 999
				}, {
					a_href: "https://detail.meizu.com/item/meizu_15plus.html",
					img_src: "https://openfile.meizu.com/group1/M00/04/1C/Cgbj0VrcbrCANJBMAAxI8Fi80MA520.png",
					name: "魅族 15 Plus",
					slogan: "领券",
					feature: "限量领券更优惠 | 三星8895处理器 2000万暗光双摄",
					unit: "￥",
					price: 1798
				}]
			}
		},
		components: {
			ProductList
		}
	}
</script>

<style lang="less" scoped>
	/* 手机 */
	.index-phone {
		/* title颜色 */
		.list-title {
			&:after {
				background: #0bbbef;
			}
		}
		/* 广告图片 */
		.list-ad {
			a {
				display: block;
				img {
					display: block;
					width: 100%;
				}
			}
		}
	}
</style>
