<template>
  <div class="projet-wrapper">

    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>
      
      <h3 class="projet-heading">Code postal</h3>

      <!-- Cards -->
      <div class="projet-content">
        
        <div class="projet-content projet-content__form">
            <input type="text" v-model="projetPostal" 
            class="projet-form__input--text" 
            placeholder="Code postal" 
            @keypress.enter="next" />
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
      projetPostal: '',
      errorForm: false
    };
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() { 
        this.$emit('next', { postal: this.projetPostal });
    },
  },
    name: 'ProjetPostal',
}
</script>