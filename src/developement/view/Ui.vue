<template>
    <div class="ui">
        <div class="container">
            
        <!-- tab -->
        <div class="tab">
            <!-- tab list -->
            <div class="tab-list">
                <!-- tab nav -->
                <div class="tab-nav">
                    <span @click="tabActive = 'londres'" :class="{ 'tab-nav__link--active' : 'londres' == tabActive }" class="tab-nav__link">Londres</span>
                    <span @click="tabActive = 'paris'" :class="{ 'tab-nav__link--active' : 'paris' == tabActive }" class="tab-nav__link">Paris</span>
                    <span @click="tabActive = 'tokyo'" :class="{ 'tab-nav__link--active' : 'tokyo' == tabActive }" class="tab-nav__link">Tokyo</span>
                </div>
                <!-- tab item -->
                <div v-if="tabActive == 'londres'"  class="tab-item">
                    <div class="tab-item__content">
                        <h3>London</h3>
                        <p>London is the capital city of England.</p>
                    </div>
                </div>
                <div v-if="tabActive == 'paris'" class="tab-item">
                    <div class="tab-item__content">
                        <h3>Paris</h3>
                        <p>Paris is the capital of France.</p>
                    </div>
                </div>
                <div v-if="tabActive == 'tokyo'" class="tab-item">
                    <div class="tab-item__content">
                        <h3>Tokyo</h3>
                        <p>Tokyo is the capital of Japan.</p>
                    </div>
                </div>
            </div>
        </div>
            

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabActive: 'londres'
        }
    },
    methods: {
        // openItem(id) {
        //     console.log(id)
        //     console.log(this.$refs[id])
        // }
    },
    name: 'Ui'
}
</script>