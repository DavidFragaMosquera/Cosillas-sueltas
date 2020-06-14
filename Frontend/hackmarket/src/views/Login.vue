<template>
  <div>
    <vue-headful title="Login" />
    <p><router-link :to="{ name:'NewUser'}">¡ Registrate !</router-link></p>
    <h2>Logueate!</h2>
    <input type="text" placeholder="Escribe tu email" v-model="email" />
    <input type="password" placeholder="Escribe tu contraseña" v-model="password" />
    <button @click="login()">LOGIN</button>
  </div>
</template>

<script>
import { loginUser } from "../api/utils";
import Swal from "sweetalert2";

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
        Swal.fire({
        icon: "success",
        title: 'Tienes acceso',
        text: "Adelante😀 "
      });
      } catch (err) {
                Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Usuario o contraseña incorrecta',
})
      }
    }
  }
};
</script>

<style scoped>
div{
  padding-bottom: 20rem;
}
button{
  align-content: center;
  padding: 0.5rem 3rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: orange;
}

</style>