<template>
    <div class="category">
        <nav class="category-nav">
            <router-link v-for="(nav, index) in navList" :key="index" tag="div"
                :to="`/category/${nav.enName}`">
                <span></span>{{ nav.chName }}
            </router-link>
        </nav>
        <div class="category-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tabId: 'phone',
            navList: [
                {enName: 'phone', chName: '手机'},
                {enName: 'audio', chName: '声学'},
                {enName: 'section', chName: '配件'},
                {enName: 'surround', chName: '周边'}
            ]
        };
    },
    methods: {
        changeTab(enName) {
            this.tabId = enName;
        }
    }
}
</script>

<style lang="less" scoped>
// 导航栏
.category {
    height: 100%;
    .category-nav {
        float: left;
        width: 13vw;
        height: 100%;
        overflow: auto;

        div {
            display: block;
            color: #000;
            font-size: 4vw;
            padding: 2vw 0;
            text-align: center;
            cursor: pointer;

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
        height: 100%;
        margin-left: 13vw;
        border-left: 1px solid #ccc;
        overflow: auto;
    }
}
</style>
