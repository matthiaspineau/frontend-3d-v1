<template>
  <div class="projet-wrapper">

    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>

      <h3 class="projet-heading">Dimension de l'élément</h3>

      <div class="projet-content projet-content__form">
        <input type="text" v-model="dim.x" 
        class="projet-form__input--text" 
        placeholder="x" />
        <input type="text" v-model="dim.y" 
        class="projet-form__input--text" 
        placeholder="y" />
        <input type="text" v-model="dim.z" 
        class="projet-form__input--text" 
        placeholder="z" />
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
      dim: {
        x: '',
        y: '',
        z: ''
      }
    }
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit("next", { dim: this.dim });
    },
    // selectType(title) {
    //   this.currentSelected = title
    // }
  },
  name: "ProjetDimension",
};
</script>