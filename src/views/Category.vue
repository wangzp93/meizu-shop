<template>
    <div class="category">
        <nav class="category-nav">
            <div v-for="(nav, index) in navList" :key="index" :class="{active: nav.enName == tabId}"
                @click="changeTab(nav.enName)">
                <span></span>{{ nav.chName }}
            </div>
        </nav>
        <div class="category-content">
            <phone v-if="tabId == 'phone'"></phone>
            <audio-p v-else-if="tabId == 'audio'"></audio-p>
            <section-p v-else-if="tabId == 'section'"></section-p>
            <surround v-else-if="tabId == 'surround'"></surround>
        </div>
    </div>
</template>

<script>
import Phone from '@/components/category/phone.vue'
import AudioP from '@/components/category/audio.vue'
import SectionP from '@/components/category/section.vue'
import Surround from '@/components/category/surround.vue'

export default {
    components: {
        Phone,
        AudioP,
        SectionP,
        Surround
    },
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
    .category-nav {
        width: 13vw;
        float: left;

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

            &.active {
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
