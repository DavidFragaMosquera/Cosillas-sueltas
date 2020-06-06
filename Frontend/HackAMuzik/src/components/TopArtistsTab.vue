<template>
<div>
  <!-- HACEMOS UN VFOR DE LOS ELEMENTOS PARA SACAR LOS DATOS QUE QUEREMOS MOSTRAR DE LOS ARTISTAS -->
  <div class="topartists" v-for="artist in artists" :key="artist.id">
      <p> <img :src="artist.image[2]['#text']"> </p>
       <p> Artista: {{ artist.name }} </p>
        <p> Oyentes: {{ artist.listeners }} </p>
         <p> Url: {{ artist.url }} </p>  
  </div>
  </div>
</template>

<script>
/* EXPORTAMOS LOS DATOS RECOGIDOS EN ARRAY ANTERIOR */
export default {
  name: 'topartiststab',
  props: {
    artists: Array   
  }
}
</script>


<style scoped>

</style>