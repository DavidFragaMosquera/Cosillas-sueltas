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
  placeholder="Busqueda">

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
      search: ''
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
        char.gender.toLowerCase().includes(this.search.toLowerCase()) 


      )
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results))
  }
}
</script>
