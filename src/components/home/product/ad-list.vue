<!-- 广告列表 -->
<template>
	<div class="list-ad">
		<div v-for="ad in adList" class="accessoary-ad">
			<a :href="ad.a_href">
				<div class="accessoary-ad-detail">
					<h4 class="ad-name">{{ ad.name }}</h4>
					<p class="ad-feature">{{ ad.feature }}</p>
					<p class="ad-price">
						<i>{{ ad.unit }}</i>{{ ad.price }}
					</p>
				</div>
				<img class="lazy-img loaded-img" :data-src="ad.img_src" alt="" actived="actived" :src="ad.img_src">
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			adList: {
				type: [Array],
				default: []
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>
