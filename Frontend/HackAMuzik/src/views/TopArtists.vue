<template>
<topartiststab
:artists="artists"
></topartiststab>
<!--   <div class="artists">
    <ul>
      <li
      v-for="artist in artists" :key="artist.id">
        <img :src="artist.image[2]['#text']">
        ARTISTA: {{ artist.name }}
        OYENTES: {{ artist.listeners }}
        URL: {{ artist.url }}
      </li>
    </ul>
  </div> -->
</template>

<script>
import api from '@/api/index.js'
import topartiststab from '@/components/TopArtistsTab'

export default {
  name: 'topartists',
  components: { topartiststab },
  created(){
  api.getArtist().then(response => (this.artists = response.data.topartists.artist))
},
  data(){
    return {
      artists: []     
    }
  }

}

</script>
<style scoped>

</style>