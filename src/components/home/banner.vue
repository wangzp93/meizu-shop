<!-- 广告 -->
<template>
    <div class="index-banner" id="index-banner">
        <div v-for="row in rowList" class="row">
            <div v-for="banner in row.bannerList" class="banner-lg">
                <a :href="banner.a_href">
                    <img :src="banner.img_src">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    beforeMount () {
        this.$axios({
            url: '../../../static/data/home/banner.json',
            url: this.$store.state.baseUrl + 'home/banner',
            method: 'post'
        }).then(resp => {
            if (resp.status === 200) {
                var data = resp.data;
                this.rowList = data.rowList;
            }
        }).catch (error => {
            
        });
    },
    data () {
        return {
            rowList: []
        }
    }
}
</script>

<style lang="less" scoped>
.index-banner {
    display: flex;

    .row {
        width: 50%;

        .banner-lg {
            width: 100%;

            a {
                display: block;

                img {
                    width: 100%;
                    display: block;
                }
            }
        }
    }
}
</style>
