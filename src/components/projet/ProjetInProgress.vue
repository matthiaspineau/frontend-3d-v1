<template>
    <div class="projet-in-progress">
        <div class="divider appearOpacity" @click="close"></div>

        <div class="contain-projet-in-progress appearContentFromRight">
            <span class="the__close" @click="close">Fermer</span>

            <div class="the__text appearTextFromBottom">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quidem quas, impedit nemo delectus commodi accusantium nihil! Velit non, expedita omnis quo, dolores quisquam ipsam possimus rerum itaque accusamus vitae?</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum a aspernatur excepturi iste dolore ratione? Temporibus quibusdam corporis rerum distinctio libero dolor repellendus nobis. Eveniet amet rem optio doloribus?</p>
            </div>

        </div>

        
    </div>
</template>

<script>
export default {
    methods: {
        close() {
            this.$emit('close')
        }
    },
    name: 'ProjetInProgress'
}
</script>