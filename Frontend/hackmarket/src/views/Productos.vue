<template>
  <div>
    <h2>
      LISTA DE PRODUCTOS
    </h2>
    <div
      class="productos"
      v-for="producto in productos"
      :key="producto.id">
      <p>ID: {{ producto.id }}</p>
      <p>NOMBRE: {{ producto.nombre }}</p>
      <p>DESCRIPCIÓN: {{ producto.descripcion }}</p>
      <p>ESTADO: {{ producto.estado }}</p>
      <p><img :src="producto.img"></p>
      <p>PRECIO: {{ producto.precio }}</p>
      <p>STOCK: {{ producto.stock }}</p>
      <button>COMPRAR</button>
    </div>
    <footercustom></footercustom>
  </div>
</template>

<script>
import axios from "axios";
import footercustom from '@/components/FooterCustomTab.vue'

export default {
  name: "Products",
  components: { footercustom },
  data() {
    return {
      productos: [],
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
    }
  },
  created() {
    this.showProducts();
  },
};
</script>