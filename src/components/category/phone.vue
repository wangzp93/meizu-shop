<!-- 手机 -->
<template>
    <div class="index-phone">
        <!-- 标题 -->
        <product-title :title="title"></product-title>

        <!-- 广告 -->
        <div class="list-ad">
            <a :href="ad.a_href">
                <img :src="ad.img_src" :lazy-src="ad.img_src" alt="">
            </a>
        </div>

        <!-- 手机列表 -->
        <product-list :productList="list"></product-list>
    </div>
</template>

<script>
import ProductTitle from '@/components/home/product/product-title.vue'
import ProductList from '@/components/home/product/product-list.vue'

export default {
    components: {
        ProductTitle,
        ProductList
    },
    beforeMount () {
        this.$axios({
            url: 'category/phone.json',
        }).then((resp) => {
            this.title = resp.title;
            this.ad = resp.ad;
            this.list = resp.list;
        });
    },
    data () {
        return {
            title: "",
            ad: {},
            list: []
        }
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
