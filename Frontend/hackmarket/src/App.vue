<template>
  <div id="app">
    <h1>H A C K `A´ M A R K E T</h1>
<!--     EN CASO DE QUERER UTILIZAR EL MENU EN TODAS LAS PAGINAS -->
<!--     <div id="nav">
      <p><router-link :to="{ name:'Home'}">Home</router-link></p>
      <p><router-link :to="{ name:'AddClient'}">Añadir cliente</router-link></p>
      <p><router-link :to="{ name:'Login'}">Login</router-link></p>
      <p><router-link :to="{ name:'About'}">About</router-link></p>
      <p><router-link :to="{ name:'Clients'}">Clientes</router-link></p>
      <p><router-link :to="{ name:'NewUser'}">¡ Registrate !</router-link></p>
      <br/>
      <button @click="logoutUser()">LOGOUT</button>
    </div> -->
    <router-view />
    <footercustom></footercustom>
  </div>
</template>

<script>
import { clearLogin } from "./api/utils";
import footercustom from "@/components/FooterCustomTab"
import Swal from "sweetalert2";

export default {
  name: "App",
  components: { footercustom },
  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Lexend+Tera&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
body {
  margin: 0 ;
  padding: 0;
  height: 100vh;
  background: seashell;
}
#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fdfdfd;
  background: black;
  
}
h1{
  margin: 2rem;
  font-family: 'Lexend Tera', sans-serif;
  padding: 1.5rem;
  padding-top: 2.33rem;
  text-align: left;
  font-size: 2rem;
}
h2{
  font-family: 'Lexend Tera', sans-serif;
  padding: 1.5rem;
  text-decoration: overline;
}
a{
  text-decoration: none;
  color: black;
  font-size: 1.3rem;
}

</style>
