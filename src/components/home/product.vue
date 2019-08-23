<!-- 产品列表 -->
<template>
    <div>
        <!-- 手机-->
        <phone></phone>

        <!-- 耳机 -->
        <audio-p></audio-p>

        <!-- 配件 -->
        <section-p></section-p>

        <!-- 生活周边 -->
        <surround></surround>
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
    }
}
</script>

<style>
</style>
