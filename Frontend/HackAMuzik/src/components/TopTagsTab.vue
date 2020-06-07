<template>
  <div>
    <h1>  J A C K A M U Z I K</h1>
  <!-- HACEMOS UN VFOR DE LOS ELEMENTOS PARA SACAR LOS DATOS QUE QUEREMOS MOSTRAR -->
    <div class="toptags"  v-for="tag in tags" :key="tag.id">
        <p> Estilo: {{ tag.name }} </p>
           <p> Seguidores: {{ tag.reach }} </p>
             <p> Tag usado {{ tag.taggings }} veces </p>
               <p> URL: {{ tag.url }} </p>
    </div>
  </div>
</template>

<script>
/* EXPORTAMOS LOS DATOS RECOGIDOS EN ARRAY ANTERIOR */
export default {
  name: 'toptagstab',
  props: {
    tags: Array
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

 .toptags{
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
  
} 


</style>