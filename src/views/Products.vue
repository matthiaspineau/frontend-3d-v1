<template>
    <div class="container">
        <h1>LIste des produit</h1>
    {{test}}
        <div class="m-3 p-3 border">
            <h4>counter</h4>
            <p>{{ count }}</p>
            <p>Step : <span>{{ step }}</span></p>
            <p>{{ ok }}</p>
        </div>
        <div class="row mt-2">
            <h4>compte: {{ totalTopLaner }}</h4>
            <div v-for="(laner, index) in giveToplaner" :key="index"
            class="col-md-3">
                <div class="p-1 border">
                    <h5>{{ laner.name }}</h5>
                    <p>{{ laner.role }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex'; 

export default {
    computed: {
        ok() {
            return 'ok'
        },
        ...mapState([
            'count', 'step'
        ]),
        ...mapGetters([
            'giveToplaner', 'totalTopLaner'
        ]),
        test() {
            return this.$store.getters.getPersoById(2)
        }
    }     
}
</script>