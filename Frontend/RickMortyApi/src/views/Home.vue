<template>
  <div class="home">
    <figure>
      <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" alt="Logo rick & morty">
    </figure>

  <label for="bySearch"> Busca tu personaje:   </label>
  <input 
  v-model="search" 
  id="search" 
  type="search" 
  placeholder="Busqueda"/>

<!--   <input 
  v-model="id" 
  placeholder="ID del personaje" 
  id="id"/>
  <button @click="searchChar(id)">Buscar por ID </button>
 -->
  <h2>P e r s o n a j e s</h2>
<!--   <p v-for="item in char" :key="item.id"> {{ item.name }}</p> -->

   <CharCard :chars="filteredChars" ></CharCard> 
 <!-- PRINTEANDO MI ARRAY DE LA API 
 <ul>
   <li v-for="char in chars" :key="char.id">
     {{ char.name }}
   </li>
 </ul>-->
  </div>
</template>

<script>
// @ is an alias to /src
import CharCard from '@/components/CharCard.vue'
// IMPORTANDO LA CONFIGURACION DE LA API
import api from '@/api/api.js'

export default {
  name: 'Home',
  components: {
    CharCard
  },
  data() {
    return {
      chars: [],
      search: '',
      char: [],
      id: null
    }
  },
    methods: {
    searchChar(id) {
      api.getChar(id).then(response => (this.char = response.data))
    }
  },
  computed: {
    filteredChars(){
      //SI SEARCH ESTÁ VACIO
      if(!this.search){
        return this.chars
      }
      // SI SEARCH TIENE ALGO
      return this.chars.filter( char =>
        char.name.toLowerCase().includes(this.search.toLowerCase()) ||
        char.status.toLowerCase().includes(this.search.toLowerCase()) ||
        char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
        char.species.toLowerCase().includes(this.search.toLowerCase())||
        char.id.toString().includes(this.search)
      );
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results))
  }
}
</script>

<style>
input{
  width: 280px;
  height: 40px;
  border-radius: 5%;
  font-size: 1rem;
}
h2{
  font-family: 'Chelsea Market', sans-serif;
}

</style> 
