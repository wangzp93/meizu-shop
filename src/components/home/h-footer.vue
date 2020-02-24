<!-- 底部 -->
<template>
    <footer class="main-footer">
        <div class="back-to-top" @click="toTheTop">
            <span>{{ footerData.text }}</span>
        </div>
        <div class="footer-contact">
            <a v-for="contact in footerData.contactList" :href="contact.a_href">{{ contact.text }}</a>
        </div>
        <div class="footer-record">
            <a v-for="record in footerData.recordList" :href="record.a_href" target="_blank">{{ record.text }}<br></a>
        </div>
    </footer>
</template>

<script>
export default {
    beforeMount () {
        this.$axios({
            url: 'home/h-footer'
        }).then((resp) => {
            this.footerData = resp.footerData;
        }).catch((error) => {
            this.$axios({
                baseURL: '',
                url: '/static/json/home/h-footer.json',
                method: 'get'
            }).then((resp) => {
                this.footerData = resp.footerData;
            });
        });
    },
    data () {
        return {
            // 底部
            footerData: {}
        }
    },
    methods: {
        // 返回顶部
        toTheTop () {
            var el = document.getElementsByClassName("main-router-view")[0];
            var timer = setInterval(function () {
                var scrollY = el.scrollTop;
                if (scrollY <= 0) {
                    clearInterval(timer);
                }
                el.scrollBy(0, -100);
            }, 5);
        }
    }
}
</script>

<style lang="less" scoped>
/* 底部 */
footer.main-footer {

    /* 返回顶部 */
    .back-to-top {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 17.22222vw;
        background: #f4f4f4;
        cursor: pointer;

        span {
            display: inline-block;
            color: #999;
            font-size: 4.16667vw;
        }
    }

    /* 联系方式 */
    .footer-contact {
        background: #fff;
        display: flex;
        padding: 6.01852vw 3vw 0;

        a {
            height: 9.72222vw;
            line-height: 9.72222vw;
            font-size: 4.25926vw;
            text-align: center;
            border-radius: 5vw;
            margin: 0 2vw;
            flex: 1;
            overflow: hidden;
            background: #00b4ff;
            color: #fff;
        }
    }

    /* 备案信息 */
    .footer-record {
        background: #fff;
        padding: 5vw;
        font-size: 2.26852vw;
        line-height: 1.6;

        a {
            color: #999;
        }
    }
}
</style>
