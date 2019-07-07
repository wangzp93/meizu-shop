<!-- 阿里矢量图标 Symbol用法 -->
<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="formatSvgHref"></use>
    </svg>
</template>

<script>
export default {
    props: {
        iconName: {
            type: String,
            require: true
        }
    },
    computed: {
        formatSvgHref() {
            return '#icon-' + this.iconName;
        }
    },
}
</script>

<style>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
