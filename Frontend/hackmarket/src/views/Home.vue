<template>
  <div>
    <vue-headful title="Home/Productos" />
    <menucustom></menucustom>
    <h2>
      LISTA DE PRODUCTOS
    </h2>
    <!-- SI NO QUEREMOS USAR EL COMPONENTE -->
<!--     <div
      class="productos"
      v-for="producto in productos"
      :key="producto.id">
      <p><img :src="producto.img"></p>
      <p> {{ producto.id }}</p>
      <p> {{ producto.nombre }}</p>
      <p> {{ producto.descripcion }}</p>
      <p
      :class="{
            green: producto.estado === 'disponible',
            red: producto.estado === 'no disponible',
      }"> {{ producto.estado }}</p>
      <p> {{ producto.precio }}€</p>
      <p> {{ producto.stock }} uds disponibles</p>
      <button>COMPRAR</button>
    </div>  -->
    <listaproductos :productos="productos" 
    v-on:buy = "buyProduct(index)"></listaproductos>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import axios from "axios";
import listaproductos from "@/components/ListaProductosTab.vue"
import Swal from "sweetalert2";

export default {
  name: "Home",
  components: { listaproductos, menucustom },
  data() {
    return {
      productos: []
    };
  },
  methods: {
    showProducts() {
      let self = this;
      axios
        .get("http://localhost:3050/products")
        .then(function(response) {
          console.log(response);
          self.productos = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    buyProduct() {
      Swal.fire({
        icon: "success",
        title: 'Gracias',
        text: "Producto comprado 😀 "
      });
    },
  },
  created() {
    this.showProducts();
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>