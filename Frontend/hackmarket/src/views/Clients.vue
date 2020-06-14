<template>
  <div>
    <vue-headful title="Clientes" />
    <menucustom></menucustom>
    <div v-show="!showEdit">
    <h2>
      LISTA DE CLIENTES
    </h2>
    <div
      class="clientes"
      v-for="(cliente, index) in clientes"
      :key="cliente.id">
      <p>ID: {{ cliente.id }}</p>
      <p>NOMBRE: {{ cliente.nombre }}</p>
      <p>APELLIDO: {{ cliente.apellido }}</p>
      <p>CIUDAD: {{ cliente.ciudad }}</p>
      <p>EMPRESA: {{ cliente.empresa }}</p>
      <button class="b1" @click="deleteClients(index)">
        BORRAR
      </button> 
      <button @click="showEditClients(index)">
        EDITAR</button>
        </div>
    </div>
    <div v-show="showEdit">
      <h2>Modifica</h2>
      <input type="text" v-model="newNombre" name="nombre">
      <input type="text" v-model="newApellido" name="apellido">
      <input type="text" v-model="newCiudad" name="ciudad">
      <input type="text" v-model="newEmpresa" name="empresa">
      <button class="b2" @click="editClients">MODIFICAR</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import menucustom from '@/components/MenuCustom.vue'

export default {
  name: "Clients",
  components: { menucustom },
  data() {
    return {
      clientes: [],
      id: null,
      newNombre: '',
      newApellido:'',
      newCiudad: '',
      newEmpresa:'',
      showEdit:false
    };
  },
  methods: {
    getClients() {
      var self = this;
      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          console.log(response);
          self.clientes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
        showEditClients(data){
      this.id = this.clientes[data].id
      this.newNombre =  this.clientes[data].nombre
      this.newApellido =  this.clientes[data].apellido
      this.newCiudad =  this.clientes[data].ciudad
      this.newEmpresa =  this.clientes[data].empresa
      this.showEdit = true
    },
    editClients(){
      let self = this
      axios.put('http://localhost:3050/clientes/edit/' + self.id, {
        id: self.id,
        nombre: self.newNombre,
        apellido: self.newApellido,
        ciudad: self.newCiudad,
        empresa: self.newEmpresa
      })
      // SI SALE BIEN
      .then(function (response) {
        location.reload()
        console.log(response)
      })
      // SI SALE MAL
      .catch(function (error) {
        console.log(error)
      })
    },
    deleteClients(index) {
      this.id = this.clientes[index].id;
      axios
        .delete("http://localhost:3050/clientes/del/" + this.id, {
          id: this.id,
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getClients();
  },
};
</script>

<style scope>

.clientes{
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
  object-fit: cover;
  border-bottom: 0.2px solid rgb(177, 230, 255) ;
  border-top: 0.5px solid rgb(177, 230, 255);
  border-radius: 20px;
}


p{
  font-size: 1.3rem;
}

button{
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  background: orange;
  border: none;
  border-radius: 20px;
}

.b1{
  background: blue;
  margin: 1rem;
}

img{
  transition: transform .9s ease;
  border-radius: 20px ;
  box-shadow: 0px 8px 6px -6px rgb(78, 90, 100);  
}
</style>
