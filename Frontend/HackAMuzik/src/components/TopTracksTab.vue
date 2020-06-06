<template>
  <div>
  <!-- HACEMOS UN VFOR DE LOS ELEMENTOS PARA SACAR LOS DATOS QUE QUEREMOS MOSTRAR DE LAS CANCIONES -->
      <div class="tracks" v-for="track in tracks" :key="track.id">
        <p> TITULO: {{ track.name }} </p>
          <p> BANDA: {{ track.artist.name }} </p>
            <p> <img :src="track.image[2]['#text']"> </p>
              <p> URL: {{ track.url }} </p>
                <p> OYENTES: {{ track.listeners }} </p>
                  <p> DURACION: {{ track.duration }} </p>   
     </div>
  </div>
</template>

<script>
/* EXPORTAMOS LOS DATOS RECOGIDOS EN ARRAY ANTERIOR */
export default {
  name: 'toptrackstab',
  props: {
    tracks: Array
  }
}
</script>


<style scoped>

</style>
