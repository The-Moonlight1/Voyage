<template>
    <svg class="icon" aria-hidden="true" :style="{
        color: color,
        width: size,
        height: size,
        cursor: pointer ? 'pointer' : 'default'
    }">
        <use :xlink:href="iconName"></use>
    </svg>
</template> 

<script setup>
import { computed } from 'vue'
const props = defineProps({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String
    },
    pointer: {
        type: Boolean,
        default: false
    },
    size: {
        type: String
    }
})
//<use :xlink:href="`#icon-${name}`"></use>  也可以直接使用模板字符串
//两种方法都可以
const iconName = computed(name => `#icon-${props.name}`)

</script>

<style scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>