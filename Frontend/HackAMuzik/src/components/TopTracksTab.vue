<template>
  <div>
  <h1> T O P   S O N G S</h1>
  <!-- HACEMOS UN VFOR DE LOS ELEMENTOS PARA SACAR LOS DATOS QUE QUEREMOS MOSTRAR DE LAS CANCIONES -->
      <div class="toptracks" v-for="track in tracks" :key="track.id">
      <p> <img :src="track.image[2]['#text']"> </p>
        <p> TITULO: {{ track.name }} </p>
          <p> BANDA: {{ track.artist.name }} </p>
            <p> OYENTES: {{ track.listeners }} </p>
              <p> DURACION: {{ track.duration }} </p>  
                <p> URL: {{ track.url }} </p>

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
p:first-child{
  padding-top: 1.5rem;
}

p:last-child{
  padding-bottom: 3rem;
  border-bottom: 0.5px solid purple;
}

.toptracks{
  display: inline-block;
  padding: 1rem;
  margin: 1rem;

} 

</style>
