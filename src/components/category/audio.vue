<!-- 声学 -->
<template>
    <div class="index-audio">
        <!-- 标题 -->
        <product-title :title="title"></product-title>

        <!-- 广告 -->
        <ad-list :adList="ad"></ad-list>

        <!-- 耳机列表 -->
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
            url: this.$store.state.baseUrl + 'category/audio',
            method: 'post'
        }).then(resp => {
            if (resp.status === 200) {
                var data = resp.data;
                this.title = data.title;
                this.ad = data.ad;
                this.list = data.list;
            }
        }).catch(error => {

        });
    },
    data () {
        return {
            title: "",
            ad: [],
            list: []
        }
    }
}
</script>

<style lang="less" scoped>
/* 耳机 */
.index-audio {

    /* title颜色 */
    .list-title {
        &:after {
            background: #ff6363;
        }
    }

    /* 广告背景颜色 */
    .list-ad {
        /deep/ .accessoary-ad {
            background: blue;

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
