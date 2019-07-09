<!-- 轮播图 -->
<template>
    <swiper :options="swiperOption" v-if="bannerList.length > 0">
        <swiper-slide v-for="(banner, index) in bannerList" :key="index">
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

import {
    swiper,
    swiperSlide
} from 'vue-awesome-swiper'

export default {
    components: {
        swiper,
        swiperSlide
    },
    beforeMount () {
        this.$axios({
            url: '/home/swiper',
            method: 'post',
        }).then(resp => {
            if (resp.status === 200) {
                var data = resp.data;
                this.bannerList = data.bannerList;
            }
        }).catch( error => {
            
        });
    },
    data () {
        return {
            swiperOption: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                autoplay: true,
                loop: true
            },
            bannerList: []
        }
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
