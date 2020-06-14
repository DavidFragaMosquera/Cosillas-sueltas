<template>
  <div>
    <vue-headful title="Nuevo registro" />
    <h1>¡Resgistrate!</h1>
    <p v-show="required">
      TIENES DATOS AÚN POR RELLENAR.
    </p>
    <!-- FORMULARIO -->
    <div>
      <label for="email">Email:</label>
      <input
        type="text"
        name="email"
        placeholder="email"
        v-model="email"
      />
      <br />
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        v-model="password"
      />
      <br />
      <br />
      <button @click="addUser(email, password)">
        CREAR
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Registrer",
  data() {
    return {
      email: "",
      password: "",
      correctData: false,
      required: false,
    };
  },
  methods: {
    validatingData() {
      if (
        this.email === "" ||
        this.password === "" 
      ) {
        this.correctData = false; // NO ENVIAR //
        this.required = true;
      } else {
        this.correctData = true; // SI ENVIAR //
        this.required = false;
      }
    },
    addUser(email, password) {
      // VALIDANDO DATOS DEL FORMULARIO //
      this.validatingData();
      if (this.correctData === true) {
        let self = this;
        axios
          .post("http://localhost:3050/new-user", {
            email: self.email,
            password: self.password,
          })
          .then(function(response) {
            self.emptyFields();
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
           Swal.fire({
        icon: "success",
        title: 'Usuario creado',
        text: "Adelante, haz login y disfruta de nuestra maravillosa web😀 "
      });
      } else {
                Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Faltan campos por rellenar',
})
      }
    },
    emptyFields() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>