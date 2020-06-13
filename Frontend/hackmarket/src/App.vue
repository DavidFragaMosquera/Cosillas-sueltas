<template>
  <div id="app">
    <div id="nav">
      <p><router-link :to="{ name:'Home'}">Home</router-link></p>
      <p><router-link :to="{ name:'AddClient'}">Añadir cliente</router-link></p>
      <p><router-link :to="{ name:'Login'}">Login</router-link></p>
      <p><router-link :to="{ name:'About'}">About</router-link></p>
      <p><router-link :to="{ name:'Products'}">Productos</router-link></p>
      <p><router-link :to="{ name:'NewUser'}">¡ Registrate !</router-link></p>
      <br/>
      <button @click="logoutUser()">LOGOUT</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { clearLogin } from "./api/utils";
export default {
  name: "App",
  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
    },
  },
};
</script>

<style>
body,
html {
  margin: 0 auto;
  height: 100vh;
  background: seashell;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
