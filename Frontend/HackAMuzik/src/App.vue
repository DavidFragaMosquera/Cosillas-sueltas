<template>
  <div id="app">
    <!-- IMPORTAMOS LOS LINKS DE RUTAS POR NOMBRE, NO POR RUTA POR SI ESTA CAMBIA EN UN FUTURO -->
    <div id="nav"> 
      <p><router-link :to="{ name:'Home'}">Home</router-link></p>
      <p><router-link :to="{ name:'About'}">About</router-link></p>
      <p><router-link :to="{ name:'TopArtists'}">Artistas</router-link></p>
      <p><router-link :to="{ name:'TopTracks'}">Canciones</router-link></p>
    </div>
    <router-view/>
  </div>
  <!-- IMPORTAMOS LOS LINKS DE RUTAS POR NOMBRE, NO POR RUTA POR SI ESTA CAMBIA EN UN FUTURO -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
