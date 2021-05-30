<template>
  <div id="app">
    <div id="nav" class="nav">
      <!-- logo - branding -->
      <div class="nav--branding">
        <router-link to="/">U3DM</router-link>
      </div>
      <!-- Navigation site -->
      <ul class="nav--menu">
        <li class="nav--menu__li">
          <ul class="nav--submenu"><span class="nav--submenu__service">Service</span>
            <li class="nav--submenu__li">Impression 3D</li>
            <li class="nav--submenu__li">Projet 3D</li>
            <li class="nav--submenu__li">Modèle 3D</li>
            <li class="nav--submenu__li">Ressource</li>
          </ul>
        </li>
        <li class="nav--menu__li">
          <router-link to="/">Je suis un makeur</router-link>
        </li>
        <li class="nav--menu__li">
          <router-link to="/shop">Shop</router-link>
        </li>
      </ul>

      <!-- Action nav -->
      <div class="nav--action">
        <div class="nav--action__devis">
          <button class="btn btn--plain">Obtenir un devis</button>
        </div>
        <div class="nav--action__compte">
          <img :src="require('@/assets/images/icon_user.svg')" alt="icon user">
        </div>
        <div class="nav--action__shop">
          <router-link to="/shop">
            <img :src="require('@/assets/images/icon_shop.svg')" alt="icon shop">
          </router-link>
        </div>
      </div>

      <!-- Menu hamburger -->
      <div class="hamburger">
        <span>menu</span>
      </div>
       
    </div>


    <router-view/>
 

  </div>
</template>

<style src="@/assets/scss/app.scss" lang="scss"></style>


