<template>
  <div>
    <div class="articulos" 
     v-for="(producto, index) in productos" 
     :key="producto.id">
     <div>
        <img :src="producto.img" />
        <p> {{ producto.id }}</p>
        <p> {{ producto.nombre }}</p>
        <p> {{ producto.descripcion }}</p>
        <p>{{ producto.stock }} uds disponibles</p>
        <p
          :class="{
            green: producto.estado === 'disponible',
            red: producto.estado === 'no disponible',
          }"> {{ producto.estado }}
        </p>
        <p>{{ producto.precio }}€</p>
        <button @click="buyProduct(index)">comprar</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaProductosTab",
  props: {
    productos: Array,
  },
  methods: {
    buyProduct(index) {
      let data = this.productos[index].id;
      this.$emit("buy", data);
    },
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
.articulos{
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
  padding: 0.5rem 2.5rem;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  background: orange;
  border: none;
  border-radius: 20px;
}

img{
  transition: transform .9s ease;
  border-radius: 20px ;
  box-shadow: 0px 8px 6px -6px rgb(78, 90, 100);  
}
img:hover{
  transform: scale(1.15);
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  box-shadow: 0px 8px 6px -6px rgb(78, 90, 100);  
}

</style>