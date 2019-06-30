<!-- 热点 -->
<template>
    <div class="index-hot-site">
        <!-- 上半部 -->
        <div class="hot-tip-bar">
            <span v-for="tipBar in tipBarList">
                <img :src="tipBar.img_src">{{ tipBar.text }}
            </span>
        </div>
        <!-- 下半部 -->
        <div class="hot-site">
            <ul>
                <li v-for="hotSide in hotSideList">
                    <a :href="hotSide.a_href">
                        <img :src="hotSide.img_src" alt="">
                        <span>{{ hotSide.text }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    beforeMount() {
        this.$axios({
            method: "get",
            url: "../../../static/data/home/hotSite.json",
        }).then(resp => {
            if (resp.status == 200) {
                var data = resp.data;
                this.tipBarList = data.tipBarList;
                this.hotSideList = data.hotSideList;
            }
        }).catch(error => {

        });
    },
    data() {
        return {
            tipBarList: [],
            hotSideList: []
        };
    }
}
</script>

<style lang="less" scoped>
    /* 外部框 */
    .index-hot-site {
        background: #fff;
        margin-bottom: 2.77778vw;
        text-align: center;

        /* 上半部 */
        .hot-tip-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2.4vw 7.40741vw;
            background-color: #f7f7f7;

            span {
                display: inline-block;
                padding-left: 5vw;
                font-size: 2.6vw;
                color: #999;
                position: relative;

                img {
                    position: absolute;
                    width: 3.51852vw;
                    height: 3.51852vw;
                    background: #999;
                    left: 0;
                    border-radius: 50%;
                    top: 50%;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
            }
        }

        /* 下半部 */
        .hot-site {
            ul {
                padding-top: 4vw;
                padding-bottom: 1vw;

                li {
                    display: inline-block;
                    width: 20vw;
                    height: 17vw;
                    margin: 0 1vw;

                    a {
                        display: block;

                        img {
                            display: block;
                            width: 8.33333vw;
                            margin: 0 auto;
                        }

                        span {
                            color: #000;
                            line-height: 2.6;
                            font-size: 3.33333vw;
                        }
                    }
                }
            }
        }
    }
</style>
