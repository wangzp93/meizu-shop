<template>
    <div class="category">
        <nav class="category-nav">
            <router-link key="1" to="/category/phone" tag="a"><span></span>手机</router-link>
            <router-link key="2" to="/category/audio" tag="a"><span></span>声学</router-link>
            <router-link key="3" to="/category/section" tag="a"><span></span>配件</router-link>
            <router-link key="4" to="/category/surround" tag="a"><span></span>周边</router-link>
        </nav>
        <div class="category-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [],
        };
    }
}
</script>

<style lang="less" scoped>
    // 导航栏
    .category {
        .category-nav {
            width: 12vw;
            float: left;

            a {
                display: block;
                color: #000;
                font-size: 2.5vw;
                padding: 2vw 0;
                text-align: center;

                span {
                    float: left;
                    width: 0.3em;
                    height: 1.3em;
                    vertical-align: middle;
                }

                &.router-link-active {
                    color: #007aff;

                    span {
                        background: #007aff;
                    }
                }
            }
        }

        .category-content {
            margin-left: 12vw;
            min-height: 88.5vh;
            border-left: 1px solid #ccc;
        }
    }
</style>
