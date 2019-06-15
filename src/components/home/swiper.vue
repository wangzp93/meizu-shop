<!-- 轮播图 -->
<template>
	<swiper :options="swiperOption">
		<swiper-slide v-for="banner in bannerList">
			<a :href="banner.a_href">
				<img :src="banner.img_src" class="banner-wrapper-img">
			</a>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
	// require styles
	import 'swiper/dist/css/swiper.css'
	
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	
	export default {
		data () {
			return {
				name: "首页",
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',	//轮播图锚点
						clickable: true		//是否可点击
					},
					autoplay: true,		//自动播放
					loop: true,		//是否循环播放
				},
				bannerList: [{
					a_href: "https://m.meizu.com/16s/summary/",
					img_src: "https://fms.res.meizu.com/dms/2019/04/23/3ea001fa-7cac-4de9-9fb3-8c34d1244d2e.jpg"
				}, {
					a_href: "https://detail.meizu.com/item/meizu16th.html?click=mall_index_ba_4",
					img_src: "https://fms.res.meizu.com/dms/2019/01/25/2a15ab52-d1fe-4dca-a831-90c78d94a84e.jpg"
				}, {
					a_href: "https://detail.meizu.com/item/meizunote9.html?click=mall_index_ba_1",
					img_src: "https://fms.res.meizu.com/dms/2019/03/06/b27906af-4996-4239-afe0-a4d14cb2a6c6.jpg"
				}, {
					a_href: "https://detail.mall.meizu.com/item/meizunote9.html?click=mall_index_ba_2",
					img_src: "https://fms.res.meizu.com/dms/2019/03/26/99f5526c-27f2-45a3-938d-67122493fde2.jpg"
				}, {
					a_href: "https://detail.meizu.com/item/meizux8.html?click=mall_index_ba_3",
					img_src: "https://fms.res.meizu.com/dms/2019/03/13/1f7bbfea-6b29-4beb-bb71-7ddcc693b2b0.jpg"
				}, {
					a_href: "https://m.meizu.com/accessory/tw50s.html",
					img_src: "https://fms.res.meizu.com/dms/2019/04/23/e90fc86c-e0a0-41ff-b0a0-39b0f6e40b5d.jpg"
				}]
			};
		},
		components: {
			swiper,
			swiperSlide
		}
	}
</script>

<style>
	/* 轮播图 图片 */
	.swiper-container .banner-wrapper-img {
		display: block;
		width: 100%;
	}
	/* 轮播图 页码 */
	.swiper-container .swiper-pagination-bullet {
		background-color: #FFF;
		opacity: 0.5;
	}
	/* 当前显示的 */
	.swiper-container .swiper-pagination-bullet-active {
		opacity: 1;
	}
</style>
