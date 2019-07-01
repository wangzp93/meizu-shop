<!-- 产品标题 -->
<template>
    <h3 class="list-title">{{ title }}</h3>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            require: true
        }
    }
}
</script>

<style lang="less" scoped>
/* 标题 */
.list-title {
    font-size: 4.81481vw;
    font-weight: 700;
    padding: 6vw 0 7vw;
    text-align: center;
    position: relative;

    &:after {
        position: absolute;
        content: "";
        width: 6vw;
        height: .7vw;
        left: 50%;
        -webkit-transform: translate(-50%);
        transform: translate(-50%);
        bottom: 4vw;
    }
}
</style>
