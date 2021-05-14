<template>
    <div class="accordion-list"  :data-active="itemActive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        itemActive: {
            type: String,
            default: 'item1'
        }
    },
    name: 'accordionList'
}
</script>