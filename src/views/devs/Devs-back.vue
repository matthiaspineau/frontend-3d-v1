<template>
    <div class="devs">
        
        <div class="container">


    <!-- <div class="accordion-list" ref="accordion" data-active="item1"> -->
        <accordion-list ref="accordion">
        <!-- print-feature : UPLOAD -->
        <accordion-item :title="'Déposer votre fichier impression 3D'" ref="item1" :id="'item1'" @opena="open" cls="accordion-item--active"></accordion-item>
        <!-- print-feature : PROJET -->
        <!-- <div class="accordion-item print-feature" ref="item2" @click="open('item2')">
            <div class="accordion-item-heading">
            <img class="accordion-item-heading__icon" :src="require('@/assets/images/icon-defaut.svg')" alt="icon empty" />
            <h4 class="accordion-item-heading__title h4">Déposer votre projet</h4>
            <img class="accordion-item-heading__arrow" :src="require('@/assets/images/arrow-circle.svg')" alt="arrow circle" />
          </div>
          <div class="accordion-item-content">
            <p class="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias at a molestias possimus totam facilis saepe esse, voluptatibus sequi tempore, tenetur quasi quidem consectetur molestiae omnis velit doloribus! A! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique netus sagittis, feugiat tempor sed ut feugiat. Sed suscipit arcu mauris integer magna phasellus.</p>
          </div>
        </div> -->
        <accordion-item :title="'Déposer votre projet'" ref="item2" :id="'item2'" @opena="open"></accordion-item>
        <!-- print-feature : MATERIALS -->
        <accordion-item :title="'Type de projet'" ref="item3" :id="'item3'" @opena="open"></accordion-item>
       
        <!-- print-feature : OPTIONS -->
        <div class="print-feature"></div>

        </accordion-list>
      <!-- </div> -->

    </div>

    </div>
</template>

<script>
import AccordionItem from '../../components/accordion/AccordionItem.vue'
import AccordionList from '../../components/accordion/AccordionList.vue'
export default {
    methods: {
        open(payload) {
            console.log(this.$refs.accordion.$el)
        if (payload.reference == this.$refs.accordion.$el.dataset.active) {
            this.$refs[payload.reference].$el.classList.toggle('accordion-item--active')
        } else {
            this.$refs[payload.reference].$el.classList.add('accordion-item--active')
            this.$refs[this.$refs.accordion.$el.dataset.active].$el.classList.remove('accordion-item--active')
            this.$refs.accordion.$el.dataset.active = payload.reference
        } 
          
        }
    },
    components: {
        AccordionItem,
        AccordionList
    },
    name: 'devs'
}
</script>

<style src="@/views/devs/devs.scss" lang="scss" scoped></style>