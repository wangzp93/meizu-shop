<template>
    <div class="me-index">
        <my-info></my-info>
        <my-order></my-order>
        <my-item></my-item>
        <my-other></my-other>
    </div>
</template>

<script>
import MyInfo from '../components/me/my-info'
import MyOrder from '../components/me/my-order'
import MyItem from '../components/me/my-item'
import MyOther from '../components/me/my-other'

export default {
    data() {
        return {

        }
    },
    components: {
        MyInfo,
        MyOrder,
        MyItem,
        MyOther
    }
}
</script>

<style scoped>
    .me-index {
        background: #EEE;
    }
</style>
