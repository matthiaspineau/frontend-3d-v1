<template>
  <div class="projet-wrapper">
    <div class="projet">
      <!-- Title -->
      <h3 class="projet-heading">Nommer votre projet</h3>

      <!-- Content page -->
      <div class="projet-content projet-content__form">
        <input type="text" v-model="name" 
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
      name: '',
      errorForm: false,
    };
  },
  methods: {
    next() {
      if (this.name !== null && this.name !== '') {
        this.errorForm = false
        this.$emit('next', { name: this.name });
      } else {
        this.errorForm = true
      }
    },
  },
  name: "ProjetName",
};
</script>