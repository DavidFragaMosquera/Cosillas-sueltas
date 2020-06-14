<template>
  <div id="nav">
      <p><router-link :to="{ name:'Home'}">🏠 Home</router-link></p>
      <p><router-link class="newuser" :to="{ name:'Login'}">👉 Login 👈</router-link></p>
      <p><router-link :to="{ name:'Clients'}">👥 Clientes</router-link></p>
      <p><router-link :to="{ name:'AddClient'}">➕ Añadir cliente</router-link></p>
      <p><router-link class="regist" :to="{ name:'NewUser'}">👉 Crear cuenta</router-link></p>
      <p><router-link :to="{ name:'About'}">❓ About</router-link></p>

      <br/>
      <button @click="logoutUser()"> 👋 LOGOUT 👋</button>
    </div>
</template>

<script>
import { clearLogin } from "../api/utils";

export default {
  name: "MenuCustom",
  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
    },
  },
};
</script>

<style scoped>
#nav{
  
  display: flex;
  text-decoration: none;
  justify-content: center;
  text-decoration: none;
  background: white;
  font-weight: bold;
}

#nav p{
  padding: 0.75rem; 
  border-right: 1.5px solid rgb(0, 0, 0);
  text-decoration: none;
  color: black;


}
#nav p:last-child, regist{
  border-right: none;
}

button{
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  color: red;
  background: white;
}

.regist{
  border-right: none;
  color: black;
}
</style>