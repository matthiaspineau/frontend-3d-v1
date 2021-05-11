<template>
  <div class="projet-wrapper">

    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>
      
      <h3 class="projet-heading">type</h3>

      <!-- Cards -->
      <div class="projet-content">

        <!-- Items -->
        <div v-for="(item, index) in items" :key="index"
        class="projet-content__card appearIn"
        :class="[{'projet-content__card--active' : currentSelected == item.title}, 'appearIn__item--'+(index+1)]"
        @click="selectType(item.title)">
          <div class="projet-content__card__media">
            <img :src="require('@/assets/images/img_empty.svg')" alt="" />
            <p>{{ item.text }}</p>
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
  data() {
    return {
      items: [
        {
          id: 1,
          img: 'img_empty.svg',
          title: 'numerisation',
          text: 'Numerisation 3D'
        },
         {
          id: 2,
          img: 'img_empty.svg',
          title: 'modelisation',
          text: 'Modélisation 3D'
        },
         {
          id: 3,
          img: 'img_empty.svg',
          title: 'impression',
          text: 'Impression 3d'
        }
      ],
      currentSelected: 'numerisation'
    }
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit('next', { type: this.currentSelected });
    },
    selectType(title) {
      this.currentSelected = title
    }
  },
  name: "ProjetType",
};
</script>