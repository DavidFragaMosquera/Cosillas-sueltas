<template>
  <div id="app">
    <!-- IMPORTAMOS LOS LINKS DE RUTAS POR NOMBRE, NO POR RUTA POR SI ESTA CAMBIA EN UN FUTURO -->
    <div id="nav">
      <p><router-link :to="{ name:'Home'}">Home</router-link></p>
      <p><router-link :to="{ name:'TopArtists'}">Artistas</router-link></p>
      <p><router-link :to="{ name:'TopTracks'}">Canciones</router-link></p>
      <p><router-link :to="{ name:'About'}">About</router-link></p>

    </div>
    <router-view/>
  </div>
  <!-- IMPORTAMOS LOS LINKS DE RUTAS POR NOMBRE, NO POR RUTA POR SI ESTA CAMBIA EN UN FUTURO -->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
#app {
  font-family: 'Ubuntu', sans-serif;
  color: #2a9d8f;
  text-align: center;
  background: #eae2b7;
  color: #f77f00;
}
#nav{
  color: #2a9d8f;
  padding: 1rem;
  display: flex;
  text-decoration: none;
  justify-content: flex-end;
  text-decoration: none;

}

#nav p{
  padding: 0.75rem; 
  border-right: 1.5px solid purple;
  text-decoration: none;
}

#nav p:last-child{
  border-right: none;
}

h1{
  font-size: 4rem;
  text-decoration: overline;
  color: purple;
}
</style>
