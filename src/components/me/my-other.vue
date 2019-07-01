<template>
    <div class="my-other">
        <a v-for="other in otherList" :href="other.a_href">
            {{ other.text }}
            <svg-icon iconName="next"></svg-icon>
        </a>
    </div>
</template>

<script>
export default {
    beforeMount () {
        this.$axios({
            url: '../../../static/data/me/my-other.json',
            method: 'get'
        }).then(resp => {
            if (resp.status === 200) {
                var data = resp.data;
                this.otherList = data.otherList;
            }
        }).catch (error => {
            
        });
    },
    data () {
        return {
            otherList: []
        }
    }
}
</script>

<style lang="less" scoped>
.my-other {
    margin-top: 2vw;
    background: #FFF;

    a {
        padding: 0 5vw;
        color: #333;
        display: flex;
        justify-content: space-between;
        font-size: 4vw;
        line-height: 3.5em;

        &:nth-child(n + 2) {
            border-top: 1px solid #E5E5E5;
        }

        .icon {
            color: #CCC;
            height: 3.5em;
        }
    }
}
</style>
