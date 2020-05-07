<template>
    <div class="cart">
        <p class="title">
            <span @click="back">
                <svg-icon iconName="back"></svg-icon>
            </span>
            购物车
        </p>
        <div class="content-wraper">
            <div class="content">
                <p>购物车内还没有商品，赶紧去选购吧～</p>
                <a href="//mall.meizu.com/" class="btn">随便逛逛</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        back () {
            this.$router.back();
        }
    }
}
</script>

<style lang="less" scoped>
.cart {
    min-height: 100%;
    background: #EEE;
    display: flex;
    flex-direction: column;

    .title {
        line-height: 8.8vw;
        text-align: center;
        font-size: 3.5vw;
        color: #666;
        background: #FFF;
        padding: 0 2vw;

        span {
            float: left;
            height: 8.8vw;
            cursor: pointer;
        }
    }
    .content-wraper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            padding: 5vw 0;
            text-align: center;

            p {
                font-size: 3.5vw;
                color: #666;
            }

            a {
                display: inline-block;
                width: 30vw;
                height: 10vw;
                margin-top: 8vw;
                line-height: 10vw;
                font-size: 3vw;
                background: #00C3F5;
                color: #FFF;
                border-radius: 0.5vw;
            }
        }
    }
}
</style>
