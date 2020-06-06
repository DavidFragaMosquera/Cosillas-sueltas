<template>
  <div>
  <!-- HACEMOS UN VFOR DE LOS ELEMENTOS PARA SACAR LOS DATOS QUE QUEREMOS MOSTRAR -->
    <div class="toptags"  v-for="tag in tags" :key="tag.id">
       <p> Estilo: {{ tag.name }} </p>
         <p> URL: {{ tag.url }} </p>
           <p> Seguidores: {{ tag.reach }} </p>
             <p> Tag usado {{ tag.taggings }} veces </p>
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

</style>