<template>
    <div class="category">
        <nav class="category-nav">
            <router-link v-for="(nav, index) in navList" :key="index"
                :to="formatLink(nav.enName)">
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
            navList: [
                {enName: 'phone', chName: '手机'},
                {enName: 'audio', chName: '声学'},
                {enName: 'section', chName: '配件'},
                {enName: 'surround', chName: '周边'}
            ]
        };
    },
    methods: {
        formatLink (enName) {
            return '/category/' + enName;
        }
    }
}
</script>

<style lang="less" scoped>
// 导航栏
.category {
    .category-nav {
        width: 13vw;
        float: left;

        a {
            display: block;
            color: #000;
            font-size: 4vw;
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
        margin-left: 13vw;
        min-height: 88.5vh;
        border-left: 1px solid #ccc;
    }
}
</style>
