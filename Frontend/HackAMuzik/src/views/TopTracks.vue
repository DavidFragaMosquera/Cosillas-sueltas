<template>
<div>
  <vue-headful title="Top Tracks" />
<toptrackstab
:tracks="tracks"></toptrackstab>
<!-- EN CASO DE NO USAR UN COMPONENTE : -->
<!--   <div class="tracks">
    <ul>
      <li
      v-for="track in tracks" :key="track.id">
        TITULO: {{ track.name }}
        BANDA: {{ track.artist.name }}
        OYENTES: {{ track.listeners }}
        DURACION: {{ track.duration }}
        URL: {{ track.url }}
        <img :src="track.image[2]['#text']">
      </li>
    </ul>
  </div> -->
  <footercustom></footercustom>
</div>
</template>

<script>
import api from '@/api/index.js'
import toptrackstab from '@/components/TopTracksTab'
import footercustom from '@/components/FooterCustomTab'

export default {
  name: 'toptracks',
  components: { toptrackstab,
                footercustom },
  created(){
  api.getTopTracks().then(response => (this.tracks = response.data.tracks.track))
},
  data(){
    return {
      tracks: []
    }
  }

}

</script>