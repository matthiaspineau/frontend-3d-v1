<template>
  <div class="container">

      <div class="home">
        <div class="category">
          <div class="category__item">
            <router-link to="/print-home">Déposer un fichier</router-link>
          </div>
  
          <div class="category__item">
            <router-link to="/projet-home">Démarrer un projet</router-link>
          </div>
        </div>
      </div>

  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {

  }
}
</script>
