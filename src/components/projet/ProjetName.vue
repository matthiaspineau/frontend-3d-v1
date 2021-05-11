<template>
  <div class="projet-wrapper">
    <div class="projet">
      <!-- Title -->
      <h3 class="projet-heading">Nommer votre projet</h3>

      <!-- Content page -->
      <div class="projet-content projet-content__form">
        <input type="text" v-model="projetTilte" 
        class="projet-form__input--text" 
        placeholder="Nommer votre projet" 
        @keypress.enter="next" />
        <span class="projet-form__indication">0 / 40</span>
        <p v-if="errorForm"
        class="projet-form__name--error">donner un nom a votre projet</p>
      </div>

      <!-- Button action go next step -->
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
      projetTilte: '',
      errorForm: false
    };
  },
  methods: {
    next() {
      if (this.projetTilte !== null && this.projetTilte !== '') {
        this.errorForm = false
        this.$emit('next', { title: this.projetTilte });
      } else {
        this.errorForm = true
      }
    },
  },
  name: "ProjetName",
};
</script>