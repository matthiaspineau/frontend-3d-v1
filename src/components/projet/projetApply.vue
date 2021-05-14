<template>
  <div class="projet-wrapper">

    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>

      <h3 class="projet-heading">Application</h3>

      <div class="projet-content">

        <!-- Items -->
        <div v-for="(item, index) in items" :key="index"
        class="projet-content__card appearIn"
        :class="[{'projet-content__card--active' : currentSelected == item.title}, 'appearIn__item--'+(index+1)]"
        @click="selectType(item.title)">
            <div>
                <img :src="require('@/assets/images/img_empty.svg')" alt="">
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
          title: 'robotique',
          text: 'Robotique'
        },
         {
          id: 2,
          title: 'medical',
          text: 'Médical'
        },
        {
          id: 4,
          title: 'electronique',
          text: 'Electronique'
        },
        {
          id: 5,
          title: 'autre',
          text: 'Autre'
        }
      ],
      currentSelected: 'robotique'
    }
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit("next", { apply: this.currentSelected });
    },
    selectType(title) {
      this.currentSelected = title
    }
  },
    name: 'ProjetApply'
}
</script>