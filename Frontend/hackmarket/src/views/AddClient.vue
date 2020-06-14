<template>
  <div>
    <vue-headful title="Añadir Cliente" />
    <menucustom></menucustom>
    <h2>Registrar nuevo cliente</h2>
    <p v-show="required">
      TIENES DATOS AÚN POR RELLENAR.
    </p>
    <!-- FORMULARIO -->
    <div>
      <form>
      <label for="nombre">Nombre</label>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del cliente"
        v-model="nombre"
      />
      <br />
      <label for="apellido">Apellido</label>
      <input
        type="text"
        name="apellido"
        placeholder="Apellido del cliente"
        v-model="apellido"
      />
      <br />
      <label for="ciudad">Ciudad</label>
      <input
        type="text"
        name="ciudad"
        placeholder="Ciudad del cliente"
        v-model="ciudad"
      />
      <br />
      <label for="empresa">Empresa</label>
      <input
        type="text"
        name="empresa"
        placeholder="Empresa del cliente"
        v-model="empresa"
      />
      <br />
      <br />
      <button @click="addClient(nombre, apellido, ciudad, empresa)">
        CREAR
      </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import menucustom from "@/components/MenuCustom.vue"
import Swal from "sweetalert2";

export default {
  name: "AddClient",
  components: { menucustom },
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      correctData: false,
      required: false,
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        this.correctData = false; // NO ENVIAR //
        this.required = true;
      } else {
        this.correctData = true; // SI ENVIAR //
        this.required = false;
      }
    },
    addClient(nombre, apellido, ciudad, empresa) {
      // VALIDANDO DATOS DEL FORMULARIO //
      this.validatingData();
      if (this.correctData === true) {
        var self = this;
        axios
          .post("http://localhost:3050/add", {
            nombre: self.nombre,
            apellido: self.apellido,
            ciudad: self.ciudad,
            empresa: self.empresa,
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
        title: 'Cliente creado',
        text: "Puedes consultarlo en el apartado cliente del menú😀 "
      });
      } else {
        Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No has rellenado todos los campos',
})
      }
    },
    emptyFields() {
      this.nombre = "";
      this.apellido = "";
      this.ciudad = "";
      this.empresa = "";
    },
  },
};
</script>

<style scoped>
p {
  color: red;
}

form {
  padding: 1rem;
  color: orange;
  display: flex;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  font-weight: bold;
  border-bottom: 1px solid white;
}

button{
  color: white;
  background: orange;
  padding: 1rem 2.5rem;
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: 20px;
}


</style>