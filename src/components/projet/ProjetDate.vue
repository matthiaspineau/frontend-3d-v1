<template>
  <div class="projet-wrapper">
    <!-- Progress bar -->

    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>

      <h3 class="projet-heading">Délais souhaité</h3>

      <div class="projet-content">

        <!-- Items -->
        <div v-for="(item, index) in items" :key="index"
        class="projet-content__card appearIn"
        :class="[{'projet-content__card--active' : currentSelected == item.title}, 'appearIn__item--'+(index+1)]"
        @click="selectType(item.title)">
          <p>{{ item.text }}</p>
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
          title: '1mois',
          text: '1 mois'
        },
         {
          id: 2,
          title: '2mois',
          text: '2 mois'
        },
         {
          id: 3,
          title: '3mois',
          text: '3 mois'
        }
      ],
      currentSelected: '1mois'
    }
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit("next", { date: this.currentSelected });
    },
    selectType(title) {
      this.currentSelected = title
    }
  },
  name: "ProjetDate",
};
</script>