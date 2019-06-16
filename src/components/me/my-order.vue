<!-- 我的订单 -->
<template>
	<div class="myorders">
		<!-- 我的订单 -->
        <div class="top">
            <span>我的订单</span>
            <a href="//ordercenter.mall.meizu.com/mall/order/init.html" class="goto-allorder">查看全部订单
				<svg-icon iconName="next"></svg-icon>
			</a>
        </div>
		<!-- 待付款、待收货等 -->
        <div class="order-status">
            <a v-for="status in statusList" :href="status.a_href">
				<svg-icon :iconName="status.enName"></svg-icon><br>
				{{ status.chName }}
			</a>
        </div>
    </div>
</template>

<script>
	export default {
		data() {
			return {
				statusList: [{
					enName: "payment",
					chName: "待付款",
					a_href: "//ordercenter.mall.meizu.com/mall/order/init.html?type=unpay"
				}, {
					enName: "wait-deliver",
					chName: "待发货",
					a_href: "//ordercenter.mall.meizu.com/mall/order/init.html?type=paid"
				}, {
					enName: "logistics",
					chName: "待收货",
					a_href: "//ordercenter.mall.meizu.com/mall/order/init.html?type=onroad"
				}, {
					enName: "after-sale",
					chName: "退款/售后",
					a_href: "//ordercenter.mall.meizu.com/mall/order/init.html?type=service"
				}]
			}
		}
	}
</script>

<style lang="less" scoped>
	.myorders {
		margin-top: 2vw;
		background: #FFF;
		// 我的订单
		.top {
			display: flex;
			justify-content: space-between;
			padding: 3vw 5vw;
			span {
				color: #444;
				font-size: 4.5vw;
			}
			a {
				font-size: 3.5vw;
				color: #999;
			}
		}
		// 待付款、待收货等
		.order-status {
			border-top: 1px solid #e5e5e5;
			padding: 3vw 0;
			display: flex;
			justify-content: space-between;
			a {
				width: 25%;
				color: #999;
				text-align: center;
				font-size: 3.5vw;
				&:nth-child(n + 2) {
					border-left: 1px solid #ddd;
				}
				.icon {
					font-size: 2em;
				}
			}
		}
	}
</style>
