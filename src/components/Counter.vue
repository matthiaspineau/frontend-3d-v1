<template>
    <div>
        <h5>Conposant "counter"</h5>
        <span>{{ count }}</span>
    </div>
</template>

<script>
export default {
    data () {
        return  {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    },
    name: 'Counter'
}
</script>