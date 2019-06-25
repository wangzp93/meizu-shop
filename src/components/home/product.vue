<!-- 产品列表 -->
<template>
	<div>
		<!-- 手机-->
		<p-phone></p-phone>
		
		<!-- 耳机 -->
		<div class="index-audio">
			<!-- 标题 -->
			<h3 class="list-title">{{ audio.title }}</h3>
			<!-- 广告 -->
			<ad-list :adList="audio.ad"></ad-list>
			<!-- 耳机列表 -->
			<product-list :productList="audio.list"></product-list>
		</div>
		
		<!-- 配件 -->
		<div class="index-section">
			<!-- 标题 -->
			<h3 class="list-title">{{ section.title }}</h3>
			<!-- 广告 -->
			<ad-list :adList="section.ad"></ad-list>
			
			<!-- 配件列表 -->
			<product-list :productList="section.list"></product-list>
		</div>
		
		<!-- 生活周边 -->
		<div class="index-surround">
			<!-- 标题 -->
			<h3 class="list-title">{{ surround.title }}</h3>
			<!-- 广告 -->
			<ad-list :adList="surround.ad"></ad-list>
			<!-- 周边列表 -->
			<product-list :productList="surround.list"></product-list>
		</div>
	</div>
</template>

<script>
	import ProductList from './product/product-list'
	import AdList from './product/ad-list'
	
	import PPhone from '../category/p-phone.vue'
	
	export default {
		components: {
			ProductList,
			AdList,
			PPhone,
		},
		data() {
			return {
				//手机
				phone: {
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
				},
				
				//耳机
				audio: {
					title: "魅族声学",
					ad: [{
						a_href: "https://detail.meizu.com/item/meizu_TW50s.html",
						img_src: "https://fms.res.meizu.com/dms/2019/04/23/0ad593e8-184d-43a4-8ad3-d911ae86a048.jpg",
						name: "魅族 POP2 真无线蓝牙耳机",
						feature: "蓝牙5.0 超长续航",
						unit: "￥",
						price: 399
					}, {
						a_href: "https://detail.meizu.com/item/meizu_EP63.html",
						img_src: "https://fms.res.meizu.com/dms/2019/04/23/40286483-c2a7-42d1-8a8a-e892d92adb11.jpg",
						name: "魅族 EP63NC 无线降噪耳机",
						feature: "智能降噪 声临其境",
						unit: "￥",
						price: 499
					}],
					list: [{
						a_href: "https://detail.meizu.com/item/meizu16th.html",
						img_src: "https://openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png",
						name: "魅族 HIFI 解码耳放h",
						slogan: "新品",
						feature: "小身材 大能量",
						unit: "￥",
						price: 169
					}, {
						a_href: "https://detail.meizu.com/item/flowbass.html",
						img_src: "https://openfile.meizu.com/group1/M00/02/EE/Cgbj0FpeqUqAYAbBAAJRQlEIMmc702.png",
						name: "魅族 Flow Bass 三单元耳机",
						slogan: "",
						feature: "延续经典，重赋新声",
						unit: "￥",
						price: 379,
						historyPrice: "￥599"
					}, {
						a_href: "https://detail.meizu.com/item/flowearphone.html",
						img_src: "https://openfile.meizu.com/group1/M00/01/BC/Cgbj0Vl22XGAC6YIAAGautlHsjo741.png",
						name: "魅族 Flow 三单元耳机",
						slogan: "",
						feature: "用得惬意 听得尽兴",
						unit: "￥",
						price: 379,
						historyPrice: "￥599"
					}, {
						a_href: "https://detail.meizu.com/item/meilanep52.html",
						img_src: "https://openfile.meizu.com/group1/M00/01/D2/Cgbj0Fmb55mABV4HAAKspJD9ivQ842.png",
						name: "魅蓝 EP52 蓝牙耳机",
						slogan: "",
						feature: "轻盈悦耳 动无拘束",
						unit: "￥",
						price: 199,
						historyPrice: "￥299"
					}, {
						a_href: "https://detail.meizu.com/item/ep_2x.html",
						img_src: "https://openfile.meizu.com/group1/M00/00/A2/Cix_s1gcVpeAOmoaAAGh-ubroNg891.png",
						name: "魅族 EP2X 耳机",
						slogan: "",
						feature: "契合声音的流动之美",
						unit: "￥",
						price: 69,
						historyPrice: "￥129"
					}, {
						a_href: "https://detail.meizu.com/item/ep21_new.html",
						img_src: "https://storeimg.meizu.com/product/1449643421-24522.png",
						name: "魅族 EP21耳机",
						slogan: "",
						feature: "悦耳 声形俱佳",
						unit: "￥",
						price: 69,
						historyPrice: "￥89"
					}, {
						a_href: "https://detail.meizu.com/item/meiuzep71.html",
						img_src: "https://openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png",
						name: "魅族 LIVE 四单元动铁耳机",
						slogan: "",
						feature: "享6期免息",
						unit: "￥",
						price: 1099,
						historyPrice: "￥1299"
					}, {
						a_href: "https://detail.meizu.com/item/meizu_gravity.html",
						img_src: "https://openfile.meizu.com/group1/M00/05/EA/Cgbj0FttMKWAPWDyAAFoG4YEzpI936.png",
						name: "魅族 Gravity 悬浮音响",
						slogan: "",
						feature: "魅族声学15年集大成之作",
						unit: "￥",
						price: 1099
					}]
				},
				
				//配件
				section: {
					title: "智能配件",
					ad: [{
						a_href: "https://detail.meizu.com/item/meizu_power_bank_3.html",
						img_src: "https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg",
						name: "魅族移动电源3",
						feature: "双向快充双充电口 轻薄小巧",
						unit: "￥",
						price: 79
					}, {
						a_href: "https://detail.meizu.com/item/wireless_charger.html",
						img_src: "https://fms.res.meizu.com/dms/2018/09/05/4f1db11e-e74e-4058-a041-4dd30666cf81.jpg",
						name: "魅族无线充电器",
						feature: "10W快速充电 无线即放即充",
						unit: "￥",
						price: 99
					}],
					list: [{
						a_href: "https://detail.meizu.com/item/meizu16s_pasting.html",
						img_src: "https://openfile.meizu.com/group1/M00/07/36/Cgbj0VzC2w6ASUtDAAMvobH66uY340.jpg",
						name: "魅族 16s 壳膜套装",
						slogan: "新品",
						feature: "透明保护壳 + 高透保护膜",
						unit: "￥",
						price: 39
					}, {
						a_href: "https://detail.meizu.com/item/meizu_16_plus_pasting.html",
						img_src: "https://openfile.meizu.com/group1/M00/06/DF/Cgbj0FwRr7qARwTRAAXzl3eAweE919.png",
						name: "魅族 16th Plus 高透保护膜",
						slogan: "",
						feature: "高透光率 支持魅族16th Plus屏幕指纹解锁",
						unit: "￥",
						price: 19
					}, {
						a_href: "https://detail.meizu.com/item/meizu_note9_pasting.html",
						img_src: "https://openfile.meizu.com/group1/M00/07/1C/Cgbj0Vyi-aOAT8yaAAW5mQNdc_c215.png",
						name: "魅族 Note9 壳膜套装",
						slogan: "",
						feature: "亲肤保护壳 + 高透保护膜",
						unit: "￥",
						price: 39
					}, {
						a_href: "https://detail.meizu.com/item/meizu_16th_plus_protector.html",
						img_src: "https://openfile.meizu.com/group1/M00/06/16/Cgbj0Ft7iV6AQANcAAL00J0tbyQ152.png",
						name: "魅族 16th Plus 亲肤保护壳",
						slogan: "",
						feature: "量体打造的纤薄 薄如无形",
						unit: "￥",
						price: 29
					}, {
						a_href: "https://detail.meizu.com/item/up0830s.html",
						img_src: "https://storeimg.meizu.com/product/1467170145-52479.png",
						name: "快充电源适配器（UP0830S）",
						slogan: "",
						feature: "快速充电 安全无忧",
						unit: "￥",
						price: 69,
						historyPrice: "￥89"
					}, {
						a_href: "https://detail.meizu.com/item/type_c_2.html",
						img_src: "https://openfile.meizu.com/group1/M00/03/2F/Cgbj0FqYqxqAcZ-nAAGaLqkN71s729.png",
						name: "魅族 Type-C 2.0数据线",
						slogan: "",
						feature: "5A大电流充电 高速传输",
						unit: "￥",
						price: 49,
						historyPrice: "￥59"
					}, {
						a_href: "https://detail.meizu.com/item/micro_usb_cable.html",
						img_src: "https://storeimg.meizu.com/product/1458617159-29477.png",
						name: "魅族 Micro USB 数据线",
						slogan: "",
						feature: "广泛兼容 经久耐用",
						unit: "￥",
						price: 29
					}, {
						a_href: "https://detail.meizu.com/item/type_c.html",
						img_src: "https://openfile.meizu.com/group1/M00/00/1E/CnQOjVef_HaAaD-bAAHXId4TWtA165.png",
						name: "魅族 Type-C 金属数据线",
						slogan: "",
						feature: "支持2A快速充电 耐用又放心",
						unit: "￥",
						price: 39
					}]
				},
				
				//生活周边
				surround: {
					title: "生活周边",
					ad: [{
						a_href: "https://detail.meizu.com/item/meizu_Citybag.html",
						img_src: "https://fms.res.meizu.com/dms/2019/04/23/3ccd19e4-7cf0-4f4f-bde1-c08f51e8f037.jpg",
						name: "魅族极简都市双肩包",
						feature: "650D高耐磨牛津布 大容量多功能收纳",
						unit: "￥",
						price: 179
					}, {
						a_href: "https://detail.meizu.com/item/J_BELT.html",
						img_src: "https://fms.res.meizu.com/dms/2019/04/23/000ac337-9b06-423a-ba24-7ff861d4a5f6.jpg",
						name: "J-BELT",
						feature: "J.Wong Design 无级舒适",
						unit: "￥",
						price: 999
					}],
					list: [{
						a_href: "https://detail.meizu.com/item/meizu_16_plus_pasting.html",
						img_src: "https://storeimg.meizu.com/product/1465698264-58364.jpg",
						name: "魅族路由器 极速版",
						slogan: "",
						feature: "天生不凡 快狠稳",
						unit: "￥",
						price: 99,
						historyPrice: '￥199'
					}, {
						a_href: "https://detail.meizu.com/item/bluetooth_selfie_stick.html",
						img_src: "https://openfile.meizu.com/group1/M00/01/0B/CnQOjViW3XCAKiurAAJdQmZyd6M936.png",
						name: "魅族蓝牙自拍杆",
						slogan: "",
						feature: "还给你自由的双手",
						unit: "￥",
						price: 69,
						historyPrice: '￥99'
					}, {
						a_href: "https://detail.meizu.com/item/mini_selfie_stick.html",
						img_src: "https://openfile.meizu.com/group1/M00/01/3A/CnQOjVjJ-m2AQ1LxAAE3Ze4d72s837.png",
						name: "魅族 Mini 线控自拍杆",
						slogan: "",
						feature: "轻巧迷你 自在随心",
						unit: "￥",
						price: 59
					}, {
						a_href: "https://detail.meizu.com/item/everydaychestpack.html",
						img_src: "https://openfile.meizu.com/group1/M00/02/7B/Cgbj0Vn6yW6AUlsRAAWrjB0SvJc768.png",
						name: "魅蓝胸包",
						slogan: "",
						feature: "时尚个性 动无拘束",
						unit: "￥",
						price: 89,
						historyPrice: "￥119"
					}, {
						a_href: "https://detail.meizu.com/item/color_mini_selfie_stick.html",
						img_src: "https://openfile.meizu.com/group1/M00/01/AE/Cgbj0VlWDM-AMSS5AAHtFENnYsc914.png",
						name: "魅族缤纷 Mini 自拍杆",
						slogan: "",
						feature: "曲面一体式 多功能隔层 极简与线条之美",
						unit: "￥",
						price: 49
					}, {
						a_href: "https://detail.meizu.com/item/kumamon.html",
						img_src: "https://openfile.meizu.com/group1/M00/03/59/Cgbj0Vqwv3SAKEs9AAeZO9uMlbg447.png",
						name: "Everyday 乐游系列 酷 MA 萌定制版",
						slogan: "",
						feature: "萌友为伴，为出行添点乐趣",
						unit: "￥",
						price: 599
					}]
				}
			};
		}
	}
</script>

<style lang="less">
	/* 全局公共样式 */
	/* 标题 */
	.list-title {
		font-size: 4.81481vw;
		font-weight: 700;
		padding: 6vw 0 7vw;
		text-align: center;
		position: relative;
		&:after {
			position: absolute;
			content: "";
			width: 6vw;
			height: .7vw;
			left: 50%;
			-webkit-transform: translate(-50%);
			transform: translate(-50%);
			bottom: 4vw;
		}
	}

	/* 局部单独样式 */
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

	/* 耳机 */
	.index-audio {
		/* title颜色 */
		.list-title {
			&:after {
				background: #ff6363;
			}
		}
		/* 广告背景颜色 */
		.accessoary-ad {
			&:nth-child(odd) {
				background: rgb(245, 92, 92);
			} 
			&:nth-child(even) {
				background: rgb(112, 99, 201);
			}
		}
	}
		
	/* 智能配件 */
	.index-section {
		/* title颜色 */
		.list-title {
			&:after {
				background: #7143ff;
			}
		}
		/* 广告背景颜色 */
		.accessoary-ad {
			&:nth-child(odd) {
				background: #55C3C3;
			} 
			&:nth-child(even) {
				background: #FFAE45;
			}
		}
	}

	/* 生活周边 */
	.index-surround {
		/* title颜色 */
		.list-title {
			&:after {
				background: #6fdc39;
			}
		}
		/* 广告背景颜色 */
		.accessoary-ad {
			&:nth-child(odd) {
				background: rgb(245, 92, 92);
			} 
			&:nth-child(even) {
				background: rgb(112, 99, 201);
			}
		}
	}
</style>
