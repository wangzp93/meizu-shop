<!-- 广告 -->
<template>
	<div class="index-banner" id="index-banner">
		<div v-for="row in rowList" class="row">
			<div v-for="banner in row.bannerList" class="banner-lg">
				<a :href="banner.a_href">
					<img :src="banner.img_src">
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			rowList: [{
				bannerList: [{
					a_href: "https://detail.mall.meizu.com/item/meizu16s.html",
					img_src: "https://fms.res.meizu.com/dms/2019/04/23/1234c65f-7f81-45e3-9c65-f06a92954ab8.png"
				}]
			}, {
				bannerList: [{
					a_href: "https://detail.meizu.com/item/meizu16x.html",
					img_src: "https://fms.res.meizu.com/dms/2019/04/04/bf934395-92a3-412a-9124-13dd13bd9635.png"
				}, {
					a_href: "https://detail.meizu.com/item/meizu_ep52_lite.html",
					img_src: "https://fms.res.meizu.com/dms/2019/04/19/94510dd6-fe6e-45fd-a548-21fc4f7bac7b.jpg"
				}]
			}]
		};
	}
}
</script>

<style lang="less" scoped>
	.index-banner {
		display: flex;
		.row {
			width: 50%;
			.banner-lg {
				width: 100%;
				a {
					display: block;
					img {
						width: 100%;
						display: block;
					}
				}
			}
		}
	}
</style>
