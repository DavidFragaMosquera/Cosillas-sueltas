<template>
  <div>
      <div class="clientes" v-for="(cliente, index) in clientes"
      :key="cliente.id"> 
      <p>ID: {{ cliente.id }}</p>
      <p>NOMBRE: {{ cliente.nombre }}</p>
      <p>APELLIDO: {{ cliente.apellido }}</p>
      <p>CIUDAD: {{ cliente.ciudad }}</p>
      <p>EMPRESA: {{ cliente.empresa }}</p>
      <button @click="editClients(index)"> EDITAR </button>
      <button @click="deleteClients(index)">
        BORRAR
      </button> 
      </div>
  </div>
</template>

<script>
export default {
    name: 'ShowClients',
    props: {
        notas: Array
    },
    methods: {
        editClients(index) {
            //guardando la informacion del cliente seleccionado
            let data =  this.clientes[index]
            //enviando la info del cliente a la vista 
            this.$emit('editar', data)
        },
        // FUNCION QYE EMITE UN EVENTO PARA BORRAR UN CLIENTE
        deleteClients(index){
            let data = this.clientes[index].id

            this.$emit('borrar', data)
        }
    }
}
</script>

<style>

</style>