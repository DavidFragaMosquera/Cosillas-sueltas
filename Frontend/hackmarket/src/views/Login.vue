<template>
  <div>
    <h2>Logueate!</h2>
    <input type="text" placeholder="Escribe tu email" v-model="email" />
    <input type="password" placeholder="Escribe tu contraseña" v-model="password" />
    <button @click="login()">LOGIN</button>
  </div>
</template>

<script>
import { loginUser } from "../api/utils";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        // INTENTO HACER LOGIN //
        await loginUser(this.email, this.password);
        // SI HAY LOGIN, QUE ME LLEVE AL HOME //
        this.$router.push("/home");
      } catch (err) {
        alert(`Error: ${err}`);
      }
    }
  }
};
</script>

<style scoped>
</style>