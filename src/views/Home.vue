<template>
  <div class="home">
    <header class="home-header" :style="{ backgroundImage: 'url(' + require('@/assets/u.svg') + ')' }">
      <div class="container">
        
        <h1 class="home-header__title h1">
          La réalisation de vos projets 3D devient simple et rapide.
        </h1>

        <div class="home-header-content">
          <div class="home-header-card">
            <h4 class="h4">Impression 3D</h4>
            <p class="t1">
              Démarrer votre impression 3D en quelques clics. Nous vous
              guiderons pas à pas dans la conception. <br />En savoir plus
            </p>
            <router-link to="/print-home" class="btn btn--secondary mt--20"
              >Déposer un fichier</router-link
            >
          </div>

          <div class="home-header-card">
            <h4 class="h4">Projet 3D</h4>
            <p class="t1">
              Démarrer votre impression 3D en quelques clics. Nous vous
              guiderons pas à pas dans la conception. <br />En savoir plus
            </p>
            <router-link to="/projet-home" class="btn btn--secondary mt--20"
              >Démarrer un projet</router-link
            >
          </div>
        </div>
      </div>
    </header>

  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
