<template>
	<div class="my-other">
		<a v-for="other in otherList" :href="other.a_href">
			{{ other.text }}
			<svg-icon iconName="next"></svg-icon>
		</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				otherList: [{
					text: "M码通道",
					a_href: "http://mformy.mall.meizu.com"
				}, {
					text: "手机号查询订单",
					a_href: "//ordercenter.mall.meizu.com/mall/order/phone/init.html"
				}, {
					text: "以旧换新",
					a_href: "//mcycle.mall.meizu.com/repo/m/my-mcycle"
				}, {
					text: "百城速达",
					a_href: "//mall.meizu.com/marrive/summary/index.html"
				}, {
					text: "联系客服",
					a_href: "//me.m.meizu.com/home/contact/index"
				}, {
					text: "意见反馈",
					a_href: "//me.m.meizu.com/home/suggest/index"
				}]
			}
		}
	}
</script>

<style lang="less" scoped>
	.my-other {
		margin-top: 2vw;
		background: #FFF;
		a {
			padding: 0 5vw;
			color: #333;
			display: flex;
			justify-content: space-between;
			font-size: 4vw;
			line-height: 3.5em;
			&:nth-child(n + 2) {
				border-top: 1px solid #E5E5E5;
			}
			.icon {
				color: #CCC;
				height: 3.5em;
			}
		}
	}
</style>
