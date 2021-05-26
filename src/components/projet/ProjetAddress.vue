<template>
  <div class="projet-wrapper">
  
    <div class="projet">
      <span @click="prev" class="projet__btn--prev">retour</span>

      <h3 class="projet-heading">Dimension de l'élément</h3>

      <div class="projet-content projet-content__form">
        <input type="text" v-model="address.firstname" 
        class="projet-form__input--text" 
        placeholder="nom" />
        <input type="text" v-model="address.lastname" 
        class="projet-form__input--text" 
        placeholder="prenom" />
        <input type="text" v-model="address.street1" 
        class="projet-form__input--text" 
        placeholder="adresse" />
        <input type="text" v-model="address.street2" 
        class="projet-form__input--text" 
        placeholder="adresse complémentaire" />
        <input type="text" v-model="address.city" 
        class="projet-form__input--text" 
        placeholder="ville" />
        <input type="text" v-model="address.zipcode" 
        class="projet-form__input--text" 
        placeholder="code postal" />
        <input type="text" v-model="address.telephone" 
        class="projet-form__input--text" 
        placeholder="téléphone" />
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
        address: {
          street1: '',
          street2: '',
          zipcode: '',
          firstname: '',
          lastname: '',
          city: '',
          country: 'FR',
          telephone: ''
      },
    }
  },
  methods: {
    prev() {
      this.$emit('prev');
    },
    next() {
      this.$emit("next", { address: this.address });
    },
  },
  name: "ProjetAddress",
};
</script>