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
            url: 'home/banner'
        }).then((resp) => {
            this.rowList = resp.rowList;
        }).catch((error) => {
            this.$axios({
                baseURL: '',
                url: '/static/json/home/banner.json',
                method: 'get'
            }).then((resp) => {
                this.rowList = resp.rowList;
            });
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
