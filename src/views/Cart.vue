<template>
    <div class="cart">
        <p class="title">
            <span @click="back">
                <svg-icon iconName="back"></svg-icon>
            </span>
            购物车
        </p>
        <div class="content">
            <p>购物车内还没有商品，赶紧去选购吧～</p>
            <a href="//mall.meizu.com/" class="btn">随便逛逛</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        back () {
            // window.history.back();
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
.cart {
    min-height: 88.5vh;
    background: #EEE;

    // margin-bottom: -11.4vw;
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

    .content {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin-top: -10vw;

        p {
            font-size: 3.5vw;
            color: #666;
            margin: 0 0 8vw 0;
        }

        a {
            display: inline-block;
            width: 30vw;
            height: 10vw;
            line-height: 10vw;
            font-size: 3vw;
            background: #00C3F5;
            color: #FFF;
            border-radius: 0.5vw;
        }
    }
}
</style>
