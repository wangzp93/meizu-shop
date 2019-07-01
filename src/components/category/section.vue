<!-- 配件 -->
<template>
    <div class="index-section">
        <!-- 标题 -->
        <product-title :title="title"></product-title>

        <!-- 广告 -->
        <ad-list :adList="ad"></ad-list>

        <!-- 配件列表 -->
        <product-list :productList="list"></product-list>
    </div>
</template>

<script>
import ProductTitle from '../home/product/product-title.vue'
import AdList from '../home/product/ad-list.vue'
import ProductList from '../home/product/product-list.vue'

export default {
    components: {
        ProductTitle,
        ProductList,
        AdList
    },
    beforeMount () {
        this.$axios({
            url: '../../../static/data/category/section.json',
            method: 'get'
        }).then(resp => {
            if (resp.status === 200) {
                var data = resp.data;
                this.title = data.title;
                this.ad = data.ad;
                this.list = data.list;
            }
        }).catch( error => {
            
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
/* 智能配件 */
.index-section {

    /* title颜色 */
    .list-title {
        &:after {
            background: #7143ff;
        }
    }

    /* 广告背景颜色 */
    .list-ad {
        /deep/ .accessoary-ad {
            &:nth-child(odd) {
                background: #55C3C3;
            }

            &:nth-child(even) {
                background: #FFAE45;
            }
        }
    }
}
</style>
