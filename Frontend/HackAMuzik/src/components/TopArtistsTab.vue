<template>
<div>
  <h1> T O P   A R T I S T S</h1>
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
p:first-child{
  padding-top: 1.5rem;
}

p:last-child{
  padding-bottom: 3rem;
  border-bottom: 0.5px solid purple;
}

 .topartists{
  display: inline-block;
  padding: 1rem;
  margin: 1rem;

  
}   



</style>