<template>
  <div id="app">
    <div id="nav" class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/shop">Shop</router-link> 
    </div>
    <router-view/>

    <!-- <footer class="footer">
      <div class="container">
        <div class="download">
          <div class="download__model">
            <a href="" download="../assets/model/gear.stl">model stl</a>
          </div>
           <div class="download__model">
            <a href="" download="" >model obj</a>
          </div>
        </div>
      </div>
    </footer> -->
  </div>
</template>

<style src="@/assets/scss/app.scss" lang="scss"></style>


