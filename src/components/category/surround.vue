<!-- 生活周边 -->
<template>
    <div class="index-surround">
        <!-- 标题 -->
        <product-title :title="title"></product-title>

        <!-- 广告 -->
        <ad-list :adList="ad"></ad-list>

        <!-- 周边列表 -->
        <product-list :productList="list"></product-list>
    </div>
</template>

<script>
import ProductTitle from '@/components/home/product/product-title.vue'
import ProductList from '@/components/home/product/product-list.vue'
import AdList from '@/components/home/product/ad-list.vue'

export default {
    components: {
        ProductTitle,
        ProductList,
        AdList
    },
    beforeMount () {
        this.$axios({
            url: 'category/surround'
        }).then((resp) => {
            this.title = resp.title;
            this.ad = resp.ad;
            this.list = resp.list;
        }).catch((error) => {
            this.$axios({
                baseURL: '',
                url: '/static/json/category/surround.json',
                method: 'get'
            }).then((resp) => {
                this.title = resp.title;
                this.ad = resp.ad;
                this.list = resp.list;
            });
        });
    },
    data () {
        return {
            title: "",
            ad: [],
            list: []
        };
    }
}
</script>

<style lang="less" scoped>
/* 生活周边 */
.index-surround {

    /* title颜色 */
    .list-title {
        &:after {
            background: #6fdc39;
        }
    }

    /* 广告背景颜色 */
    .list-ad {
        /deep/ .accessoary-ad {
            &:nth-child(odd) {
                background: rgb(245, 92, 92);
            }

            &:nth-child(even) {
                background: rgb(112, 99, 201);
            }
        }
    }
}
</style>
