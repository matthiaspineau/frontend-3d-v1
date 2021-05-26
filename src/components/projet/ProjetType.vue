<template>
  <div class="projet-wrapper">

    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>
      
      <h3 class="projet-heading">Choisissez votre type de projet</h3>

      <!-- Cards -->
      <div class="projet-content">

        <!-- Items -->
        <div v-for="(item, index) in items" :key="index"
        class="projet-content__card projet-content__card--small appearIn"
        :class="[{'projet-content__card--active' : currentSelected == item.id}, 'appearIn__item--'+(index+1)]"
        @click="selectType(item.id, item.scanner)">
          <div class="projet-content__card__media">
            <img :src="require('@/assets/images/img_empty.svg')" alt="" />
            <p>{{ item.name }}</p>
          </div>
        </div>

      </div>

      <div class="projet-action">
        <button class="btn btn--plain btn--center" @click="next">
          Etape suivante
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() { return [] }
    }
  },
  data() {
    return {
      currentSelected: 1,
      scanOnSite: false
    }
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit('next', { projectType: this.currentSelected, scanOnSite: this.scanOnSite });
    },
    selectType(id, scanner) {
      this.currentSelected = id
      scanner > 0 ? this.scanOnSite = true : this.scanOnSite = false
    }
  },
  name: "ProjetType",
};
</script>