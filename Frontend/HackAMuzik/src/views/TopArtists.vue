<template>
<div>
  <vue-headful title="Top Artists" />
    <label for="bySearch">Buca tu cantante favorito:</label>
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Search..." />
<topartiststab
:artists="filterArtists"
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
<footercustom></footercustom>
</div>
</template>

<script>
import api from '@/api/index.js'
import topartiststab from '@/components/TopArtistsTab'
import footercustom from '@/components/FooterCustomTab'

export default {
  name: 'topartists',
  components: { topartiststab,
                footercustom },
  created(){
  api.getArtist().then(response => (this.artists = response.data.topartists.artist))
},
  data(){
    return {
      artists: [],
      artist: [],
      search: ''     
    }
  },
    computed: {
    filterArtists() {
      if (!this.search) {
        return this.artists
      } else {
        return this.artists.filter(artist =>
          artist.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    }
  },

}

</script>
<style scoped>

</style>