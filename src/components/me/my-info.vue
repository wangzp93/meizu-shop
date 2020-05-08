<template>
    <div class="my-info">
        <!-- 功能按钮 -->
        <i @click="back" class="icon-back">
            <svg-icon iconName="back"></svg-icon>
        </i>
        <i class="icon-msg">
            <svg-icon iconName="msg"></svg-icon>
        </i>
        <!-- 头像 -->
        <img class="my-icon" :src="img_src" />
        <!-- 昵称 -->
        <p class="my-name">{{ myName }}</p>
    </div>
</template>

<script>
export default {
    beforeMount () {
        this.$axios({
            url: 'me/my-info.json'
        }).then((resp) => {
            this.img_src = resp.img_src;
            this.myName = resp.myName;
        });
    },
    data () {
        return {
            img_src: "",
            myName: ""
        }
    },
    methods: {
        back () {
            // window.history.back();
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
.my-info {
    background: linear-gradient(rgb(0, 187, 232), rgb(0, 146, 221));
    padding: 5vw;

    // 功能按钮
    .icon-back {
        float: left;
    }

    .icon-msg {
        float: right;
    }

    .icon {
        color: #FFF;
        font-size: 5vw;
        cursor: pointer;
    }

    // 头像
    .my-icon {
        width: 21vw;
        height: 21vw;
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        box-shadow: 0 0 0 0.8vw #FFF;
    }

    // 昵称
    .my-name {
        text-align: center;
        color: #FFF;
        font-weight: 500;
        font-size: 4vw;
        margin-top: 2vw;
    }
}
</style>
