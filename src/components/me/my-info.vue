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
        <div class="my-icon">
            <img :src="img_src">
        </div>
        <!-- 昵称 -->
        <p class="my-name">{{ myName }}</p>
    </div>
</template>

<script>
export default {
    beforeMount () {
        this.$axios({
            url: '../../../static/data/me/my-info.json',
            method: 'get'
        }).then(resp => {
            if (resp.status === 200) {
                var data = resp.data;
                this.img_src = data.img_src;
                this.myName = data.myName;
            }
        }).catch (error => {
            
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
        margin: 0 auto;
        background: #FFF;
        border-radius: 50%;
        padding: 0.8vw;

        img {
            width: 100%;
            border-radius: 50%;
        }
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
