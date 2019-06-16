<!-- 底部 -->
<template>
	<footer class="main-footer">
		<div class="back-to-top" @click="toTheTop">
			<span>{{ footerData.text }}</span>
		</div>
		<div class="footer-contact">
			<a v-for="contact in footerData.contactList" :href="contact.a_href">{{ contact.text }}</a>
		</div>
		<div class="footer-record">
			<a v-for="record in footerData.recordList" :href="record.a_href" target="_blank">{{ record.text }}<br></a>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				// 底部
				footerData: {
					text: "返回顶部",
					contactList: [{
						a_href: "tel:400-788-3333",
						text: "400-788-3333"
					}, {
						a_href: "http://url.meizu.com/ols_M",
						text: "在线客服"
					}],
					recordList: [{
						a_href: "http://www.miitbeian.gov.cn/",
						text: "粤ICP备13003602号-2"
					}, {
						a_href: "https://www3.res.meizu.com/static/cn/_partial/footer/images/icp2_fb8db74.jpg",
						text: "合字B2-20170010"
					}, {
						a_href: "http://www2.res.meizu.com/zh_cn/images/common/com_licence.jpg",
						text: "营业执照©2018 Meizu All rights reserved"
					}]
				}
			};
		},
		methods: {
			// 返回顶部
			toTheTop() {
				var timer = setInterval(function() {
					window.scrollBy(0, -100);
					var scrollY = document.body.scrollTop + document.documentElement.scrollTop;
					if (scrollY <=0 ) {
						clearInterval(timer);
					}
				}, 5);
			}
		}
	}
</script>

<style lang="less" scoped>
	/* 底部 */
	footer.main-footer {
		/* 返回顶部 */
		.back-to-top {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 17.22222vw;
			background: #f4f4f4;
			cursor: pointer;
			span {
				display: inline-block;
				color: #999;
				font-size: 4.16667vw;
			}
		}
		
		/* 联系方式 */
		.footer-contact {
			background: #fff;
			display: flex;
			padding: 6.01852vw 3vw 0;
			a {
				height: 9.72222vw;
				line-height: 9.72222vw;
				font-size: 4.25926vw;
				text-align: center;
				border-radius: 5vw;
				margin: 0 2vw;
				flex: 1;
				overflow: hidden;
				background: #00b4ff;
				color: #fff;
			}
		}
		/* 备案信息 */
		.footer-record {
			background: #fff;
			padding: 5vw;
			font-size: 2.26852vw;
			line-height: 1.6;
			a {
				color: #999;
			}
		}
	}
</style>
