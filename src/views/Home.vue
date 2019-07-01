<!-- 首页 -->
<template>
    <div class="home">
        <!-- 轮播图 -->
        <swiper></swiper>
        <!-- 热点 -->
        <hot-site></hot-site>
        <!-- 广告 -->
        <banner></banner>
        <!-- 产品列表 -->
        <product></product>
        <!-- 底部 -->
        <h-footer></h-footer>
    </div>
</template>

<script>
import Swiper from '../components/home/swiper'
import HotSite from '../components/home/hotSite'
import Banner from '../components/home/banner'
import Product from '../components/home/product'
import HFooter from '../components/home/h-footer'

export default {
    components: {
        Swiper,
        HotSite,
        Banner,
        Product,
        HFooter
    }
}
</script>

<style scoped>
.home {
    background: #F4F4F4;
}
</style>
