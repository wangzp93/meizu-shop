<template>
    <div id="app">
        <div class="main-router-view">
            <router-view></router-view>
        </div>
        <nav class="main-router">
            <router-link v-for="(router, index) in routerList" :key="index"
                :to="`/${router.eng_name}`">
                <svg-icon :iconName="router.eng_name"></svg-icon><br>
                <span>{{ router.text }}</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            /**
             * 为使开发简便，路由地址与svg图标地址均与英文名字相关，
             * 所以添加新路由时要注意一下，避免出现英文名不同的情况
             */
            routerList: [{
                eng_name: 'home',
                text: '首页'
            }, {
                eng_name: 'category',
                text: '分类'
            }, /* {
                eng_name: 'find',
                text: '发现'
            }, */ {
                eng_name: 'cart',
                text: '购物车'
            }, {
                eng_name: 'me',
                text: '我的'
            }]
        };
    }
}
</script>

<style lang="less">
    #app {
        height: 100%;
        display: flex;
        flex-direction: column;
        .main-router-view {
            flex: 1;
            overflow: auto;
        }
        /* 导航栏 */
        nav.main-router {
            font-size: 2.5vw;
            background-color: #fff;
            padding: 1vw 0;
            display: flex;
            justify-content: space-around;

            a {
                color: #999;
                text-align: center;

                &.router-link-active {
                    color: #007aff;
                }

                .icon {
                    font-size: 8vw;
                }
            }
        }
    }
</style>
