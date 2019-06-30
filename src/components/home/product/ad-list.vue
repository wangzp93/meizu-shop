<!-- 广告列表 -->
<template>
    <div class="list-ad">
        <div v-for="ad in adList" class="accessoary-ad">
            <a :href="ad.a_href">
                <div class="accessoary-ad-detail">
                    <h4 class="ad-name">{{ ad.name }}</h4>
                    <p class="ad-feature">{{ ad.feature }}</p>
                    <p class="ad-price">
                        <i>{{ ad.unit }}</i>{{ ad.price }}
                    </p>
                </div>
                <img class="lazy-img loaded-img" :data-src="ad.img_src" alt="" actived="actived" :src="ad.img_src">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        adList: {
            type: [Array],
            default: []
        }
    }
}
</script>

<style lang="less" scoped>
    /* 广告图片 */
    .list-ad {
        .accessoary-ad {
            a {
                display: block;

                img {
                    width: 50%;
                    display: block;
                }
            }

            /* 广告描述 */
            .accessoary-ad-detail {
                position: relative;
                width: 50%;
                height: 38vw;
                line-height: 6vw;
                padding: 3.88889vw;
                box-sizing: border-box;

                .ad-name {
                    font-size: 4.62963vw;
                    font-weight: 400;
                    color: #fff;
                    width: 33.33333vw;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }

                .ad-feature {
                    font-size: 3.33333vw;
                    color: hsla(0, 0%, 100%, .7);
                    position: relative;
                    line-height: 1.2;
                    padding: 1.2vw 0;

                    &:after {
                        position: absolute;
                        content: "";
                        width: 5vw;
                        height: .5vw;
                        background: #fff;
                        left: 0;
                        bottom: -1.5vw;
                    }
                }

                .ad-price {
                    position: absolute;
                    left: 3.88889vw;
                    bottom: 3vw;
                    // margin-top: 6vw;
                    color: hsla(0, 0%, 100%, .7);
                    font-size: 4.62963vw;

                    i {
                        font-style: normal;
                    }
                }
            }

            &:nth-child(odd) {
                .accessoary-ad-detail {
                    float: right;
                }
            }

            &:nth-child(even) {
                .accessoary-ad-detail {
                    float: left;
                }
            }
        }
    }
</style>
