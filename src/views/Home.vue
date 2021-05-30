<template>
  <div>
    <div class="container">
      <div class="home">

        <h1 class="h1">La réalisation de vos projets 3D devient simple et rapide.</h1>

        <div class="category">
          <div class="category__item">
            <h4 class="h4">Impression 3D</h4>
            <p class="t1">Démarrer votre impression 3D en quelques clics. Nous vous guiderons pas à pas dans la conception. <br>En savoir plus</p>
            <router-link to="/print-home" class="btn btn--secondary mt--20">Déposer un fichier</router-link>
          </div>

          <div class="category__item">
            <h4 class="h4">Projet 3D</h4>
            <p class="t1">Démarrer votre impression 3D en quelques clics. Nous vous guiderons pas à pas dans la conception. <br>En savoir plus</p>
            <router-link to="/projet-home" class="btn btn--secondary mt--20">Démarrer un projet</router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
