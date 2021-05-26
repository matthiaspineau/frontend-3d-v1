<template>
  <div class="projet-wrapper">
    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>
      <!-- Title -->
      <h3 class="projet-heading">Description de votre projet</h3>

      <!-- Content page -->
      <div class="projet-content projet-content__form">
        <textarea
          type="text"
          v-model="description"
          class="projet-form__textarea"
          placeholder="Description de votre projet"
          @keypress.enter="next"
        ></textarea>
        <!-- <span class="projet-form__indication">0 / 40</span> -->
        <p v-if="errorForm" class="projet-form__name--error">
          décrire votre projet
        </p>
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
  name: "ProjetDescription",
  data() {
    return {
      description: "",
      errorForm: false,
    };
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      if (this.description !== null && this.description !== "") {
        this.errorForm = false;
        this.$emit("next", { description: this.description });
      } else {
        this.errorForm = true;
      }
    },
  },
};
</script>