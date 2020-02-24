<template>
    <div class="my-item">
        <a v-for="item in itemList" :href="item.a_href">
            <img :src="item.img_src"><br>
            {{ item.text }}
        </a>
    </div>
</template>

<script>
export default {
    beforeMount () {
        this.$axios({
            url: 'me/my-item'
        }).then((resp) => {
            this.itemList = resp.itemList;
        });
    },
    data () {
        return {
            itemList: []
        }
    }
}
</script>

<style lang="less" scoped>
.my-item {
    margin-top: 2vw;
    padding: 3vw 0;
    background: #FFF;
    display: flex;
    justify-content: space-around;

    a {
        text-align: center;
        color: #666;
        font-size: 3.5vw;

        img {
            width: 7vw;
        }
    }
}
</style>
